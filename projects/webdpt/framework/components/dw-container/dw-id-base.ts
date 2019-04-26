import { AfterContentInit, AfterViewInit, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { filter } from 'rxjs/operators';
import { DwComponent } from './dw-component';
import { replaceOrInsertTemplate } from './replaceOrInsertTemplate';

export abstract class DwIdBase implements OnInit, AfterContentInit, AfterViewInit, DoCheck {
  ngDoCheck(): void {

  }

  ngAfterContentInit(): void {}

  private _unprocessedCustFields: DwIdBase[] = [];
  private _dwId: string;
  private _dwReplace: string;
  private _dwInsertAfter: string;
  private _dwInsertBefore: string;

  @Input()
  set dwId(value: string) { this._dwId = value; }

  get dwId(): string { return this._dwId; }


  @Input()
  set dwReplace(value: string) { this._dwReplace = value; }

  get dwReplace(): string { return this._dwReplace; }


  @Input()
  set dwInsertAfter(value: string) { this._dwInsertAfter = value; }

  get dwInsertAfter(): string { return this._dwInsertAfter; }


  @Input()
  set dwInsertBefore(value: string) { this._dwInsertBefore = value; }

  get dwInsertBefore(): string { return this._dwInsertBefore; }

  @Input()
  get dwReplaceOf(): string { return this._dwReplace; }

  set dwReplaceOf(value: string) { this._dwReplace = value; }

  @Input()
  get dwInsertAfterOf(): string { return this._dwInsertAfter; }

  set dwInsertAfterOf(value: string) { this._dwInsertAfter = value; }

  @Input()
  get dwInsertBeforeOf(): string { return this._dwInsertBefore; }

  set dwInsertBeforeOf(value: string) { this._dwInsertBefore = value; }

  @Input('dwIdOf')
  set customFields(fields: DwIdBase[]) { this._unprocessedCustFields = fields; }

  private _tempIndex;

  constructor(public templateRef: TemplateRef<any>,
              public viewContainer: ViewContainerRef,
              protected parentDwComponent: DwComponent) {
    this._tempIndex = DwIdBase.genTempHash();
    // performance.mark('DwIdBase create ~ replaceOrInsert');
  }

  static idx = 1;

  static genTempHash(): number {
    DwIdBase.idx = DwIdBase.idx + 1;
    return DwIdBase.idx;
  }

  abstract ngOnInit(): void;

  onInit(): void {

    if (this.dwId) {

      if (this.templateRef && this.viewContainer) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }

      if (!this.parentDwComponent) { return; }

      this.parentDwComponent.custViewReady$.pipe(
        filter(x => x !== null),
      ).subscribe(
        (custFieldsMap: Map<string, DwIdBase>) => {

          const dwId = this.dwId;
          const custField = custFieldsMap.get(dwId);

          if (custField) {
            replaceOrInsertTemplate(custField, this);
          }

        }
      );
    }
  }

  ngAfterViewInit(): void { }

  insertBefore(template: TemplateRef<any> | DwIdBase): void {
    if (this.viewContainer && template) {
      const _parentView = this.templateRef['_parentView'];
      const context = _parentView.context;
      const view = this.viewContainer.createEmbeddedView(
        this._getTemplate(template)
      );
      view.context.$implicit = {
        dwComponent: _parentView.component,
        ...context['$implicit'] || context
      };
      this.viewContainer.insert(view, 0);
      // performance.measure('DwIdBase create ~ replaceOrInsert');
    }
  }

  insertAfter(template: TemplateRef<any> | DwIdBase): void {
    if (this.viewContainer && template) {
      const _parentView = this.templateRef['_parentView'];
      const context = _parentView.context;
      const view = this.viewContainer.createEmbeddedView(
        this._getTemplate(template)
      );
      view.context.$implicit = {
        dwComponent: _parentView.component,
        ...context['$implicit'] || context
      };
      this.viewContainer.insert(view, this.viewContainer.length);
      // performance.measure('DwIdBase create ~ replaceOrInsert');
    }
  }

  replaceCurrent(template: TemplateRef<any> | DwIdBase): void {
    if (this.viewContainer && template) {
      this.viewContainer.clear();
      const _parentView = this.templateRef['_parentView'];
      const context = _parentView.context;
      const view = this.viewContainer.createEmbeddedView(
        this._getTemplate(template)
      );
      view.context.$implicit = {
        dwComponent: _parentView.component,
        ...context['$implicit'] || context
      };

      // performance.measure('DwIdBase create ~ replaceOrInsert');
    }
  }

  _getTemplate(template: TemplateRef<any> | DwIdBase): TemplateRef<any> {
    if (template instanceof DwIdBase) {
      return (<DwIdBase>template).templateRef;
    }
    return template;
  }

  get excludeDwId(): string {
    return this.dwInsertBefore || this.dwInsertAfter || this.dwReplace;
  }

  log(): void {
    console.log('%c' + this._getIds(), 'background: #111; color: #fff');
  }

  _getIds(): string {
    return JSON.stringify({
      id: this.dwId,
      replace: this.dwReplace,
      after: this.dwInsertAfter,
      before: this.dwInsertBefore
    });
  }
}
