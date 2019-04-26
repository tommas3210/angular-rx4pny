/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class DwSkeletonComponent {
    constructor() {
        this.rowsList = [];
        this.widthList = [];
        this.dwActive = false;
        this.dwLoading = true;
        this.dwTitle = true;
        this.dwAvatar = false;
        this.dwParagraph = true;
    }
    /**
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.dwAvatar;
        /** @type {?} */
        const hasParagraph = !!this.dwParagraph;
        /** @type {?} */
        let width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.dwTitle));
    }
    /**
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = (!!this.dwTitle && !this.dwParagraph) ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.dwAvatar));
    }
    /**
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.dwAvatar;
        /** @type {?} */
        const hasTitle = !!this.dwTitle;
        /** @type {?} */
        const basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return Object.assign({}, basicProps, this.getProps(this.dwParagraph));
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        if (prop && typeof prop === 'object') {
            return prop;
        }
        return {};
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        if (typeof value === 'number') {
            return `${value}px`;
        }
        else if (typeof value === 'string') {
            return value;
        }
    }
    /**
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        this.avatarClassMap = {
            [`ant-skeleton-avatar-lg`]: this.avatar.size === 'large',
            [`ant-skeleton-avatar-sm `]: this.avatar.size === 'small',
            [`ant-skeleton-avatar-circle`]: this.avatar.shape === 'circle',
            [`ant-skeleton-avatar-square `]: this.avatar.shape === 'square'
        };
    }
    /**
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
        this.updateClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwTitle"] || changes["dwAvatar"] || changes["dwParagraph"]) {
            this.updateProps();
            this.updateClassMap();
        }
    }
}
DwSkeletonComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-skeleton',
                template: "<ng-container *ngIf=\"dwLoading\">\n  <div class=\"ant-skeleton-header\">\n    <span *ngIf=\"!!dwAvatar\"\n      class=\"ant-skeleton-avatar\"\n      [ngClass]=\"avatarClassMap\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!dwTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!dwParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList;let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!dwLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                host: {
                    '[class.ant-skeleton]': 'true',
                    '[class.ant-skeleton-with-avatar]': '!!dwAvatar',
                    '[class.ant-skeleton-active]': 'dwActive'
                }
            }] }
];
DwSkeletonComponent.propDecorators = {
    dwActive: [{ type: Input }],
    dwLoading: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwAvatar: [{ type: Input }],
    dwParagraph: [{ type: Input }]
};
function DwSkeletonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSkeletonComponent.prototype.title;
    /** @type {?} */
    DwSkeletonComponent.prototype.avatar;
    /** @type {?} */
    DwSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    DwSkeletonComponent.prototype.avatarClassMap;
    /** @type {?} */
    DwSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    DwSkeletonComponent.prototype.widthList;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwActive;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwLoading;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwTitle;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwAvatar;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwParagraph;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJza2VsZXRvbi9kdy1za2VsZXRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQVluRixNQUFNOzt3QkFLaUIsRUFBRTt5QkFDYSxFQUFFO3dCQUVsQixLQUFLO3lCQUNKLElBQUk7dUJBQ3FCLElBQUk7d0JBQ0YsS0FBSzsyQkFDQyxJQUFJOzs7OztJQUVsRCxhQUFhOztRQUNuQixNQUFNLFNBQVMsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7UUFDM0MsTUFBTSxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBQ2pELElBQUksS0FBSyxDQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjthQUFNLElBQUksU0FBUyxJQUFJLFlBQVksRUFBRTtZQUNwQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7UUFDRCx1QkFBUyxLQUFLLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUc7Ozs7O0lBRzNDLGNBQWM7O1FBQ3BCLE1BQU0sS0FBSyxHQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs7UUFDdkYsTUFBTSxJQUFJLEdBQWUsT0FBTyxDQUFDO1FBQ2pDLHVCQUFTLEtBQUssRUFBRSxJQUFJLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUc7Ozs7O0lBR2xELGlC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LGVBQVksT0FBTyxZQUFTLElBQUksT0FBTyxlQUFZLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7WUFoSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpcEJBQTJDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0osc0JBQXNCLEVBQUUsTUFBTTtvQkFDOUIsa0NBQWtDLEVBQUUsWUFBWTtvQkFDaEQsNkJBQTZCLEVBQUUsVUFBVTtpQkFDMUM7YUFDRjs7O3VCQVNFLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdmF0YXJTaGFwZSwgQXZhdGFyU2l6ZSwgRHdTa2VsZXRvbkF2YXRhciwgRHdTa2VsZXRvblBhcmFncmFwaCwgRHdTa2VsZXRvblRpdGxlIH0gZnJvbSAnLi9kdy1za2VsZXRvbi50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHctc2tlbGV0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b25dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLXdpdGgtYXZhdGFyXSc6ICchIWR3QXZhdGFyJyxcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi1hY3RpdmVdJzogJ2R3QWN0aXZlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3U2tlbGV0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHRpdGxlOiBEd1NrZWxldG9uVGl0bGU7XG4gIGF2YXRhcjogRHdTa2VsZXRvbkF2YXRhcjtcbiAgcGFyYWdyYXBoOiBEd1NrZWxldG9uUGFyYWdyYXBoO1xuICBhdmF0YXJDbGFzc01hcDtcbiAgcm93c0xpc3Q6IG51bWJlcltdID0gW107XG4gIHdpZHRoTGlzdDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xuXG4gIEBJbnB1dCgpIGR3QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3TG9hZGluZyA9IHRydWU7XG4gIEBJbnB1dCgpIGR3VGl0bGU6IER3U2tlbGV0b25UaXRsZSB8IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkd0F2YXRhcjogRHdTa2VsZXRvbkF2YXRhciB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZHdQYXJhZ3JhcGg6IER3U2tlbGV0b25QYXJhZ3JhcGggfCBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogRHdTa2VsZXRvblRpdGxlIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMuZHdBdmF0YXI7XG4gICAgY29uc3QgaGFzUGFyYWdyYXBoOiBib29sZWFuID0gISF0aGlzLmR3UGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aDogc3RyaW5nO1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnMzglJztcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICAgIHdpZHRoID0gJzUwJSc7XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMuZHdUaXRsZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogRHdTa2VsZXRvbkF2YXRhciB7XG4gICAgY29uc3Qgc2hhcGU6IEF2YXRhclNoYXBlID0gKCEhdGhpcy5kd1RpdGxlICYmICF0aGlzLmR3UGFyYWdyYXBoKSA/ICdzcXVhcmUnIDogJ2NpcmNsZSc7XG4gICAgY29uc3Qgc2l6ZTogQXZhdGFyU2l6ZSA9ICdsYXJnZSc7XG4gICAgcmV0dXJuIHsgc2hhcGUsIHNpemUsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5kd0F2YXRhcikgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYWdyYXBoUHJvcHMoKTogRHdTa2VsZXRvblBhcmFncmFwaCB7XG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLmR3QXZhdGFyO1xuICAgIGNvbnN0IGhhc1RpdGxlOiBib29sZWFuID0gISF0aGlzLmR3VGl0bGU7XG4gICAgY29uc3QgYmFzaWNQcm9wczogRHdTa2VsZXRvblBhcmFncmFwaCA9IHt9O1xuICAgIC8vIFdpZHRoXG4gICAgaWYgKCFoYXNBdmF0YXIgfHwgIWhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XG4gICAgfVxuICAgIC8vIFJvd3NcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYmFzaWNQcm9wcywgLi4udGhpcy5nZXRQcm9wcyh0aGlzLmR3UGFyYWdyYXBoKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9wczxUPihwcm9wOiBUIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCk6IFQgfCB7fSAge1xuICAgIGlmIChwcm9wICYmIHR5cGVvZiBwcm9wID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHRvQ1NTVW5pdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGhMaXN0KCk6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIHJvd3MgfSA9IHRoaXMucGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aExpc3QgPSBbXTtcbiAgICBpZiAod2lkdGggJiYgQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IHdpZHRoO1xuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgIUFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSBbXTtcbiAgICAgIHdpZHRoTGlzdFtyb3dzIC0gMV0gPSB3aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuYXZhdGFyQ2xhc3NNYXAgPSB7XG4gICAgICBbIGBhbnQtc2tlbGV0b24tYXZhdGFyLWxnYCBdICAgICA6IHRoaXMuYXZhdGFyLnNpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGBhbnQtc2tlbGV0b24tYXZhdGFyLXNtIGAgXSAgICA6IHRoaXMuYXZhdGFyLnNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbIGBhbnQtc2tlbGV0b24tYXZhdGFyLWNpcmNsZWAgXSA6IHRoaXMuYXZhdGFyLnNoYXBlID09PSAnY2lyY2xlJyxcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItc3F1YXJlIGAgXTogdGhpcy5hdmF0YXIuc2hhcGUgPT09ICdzcXVhcmUnXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVByb3BzKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUgICAgID0gdGhpcy5nZXRUaXRsZVByb3BzKCk7XG4gICAgdGhpcy5hdmF0YXIgICAgPSB0aGlzLmdldEF2YXRhclByb3BzKCk7XG4gICAgdGhpcy5wYXJhZ3JhcGggPSB0aGlzLmdldFBhcmFncmFwaFByb3BzKCk7XG4gICAgdGhpcy5yb3dzTGlzdCAgPSBbLi4uQXJyYXkodGhpcy5wYXJhZ3JhcGgucm93cyldO1xuICAgIHRoaXMud2lkdGhMaXN0ID0gdGhpcy5nZXRXaWR0aExpc3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZHdUaXRsZSB8fCBjaGFuZ2VzLmR3QXZhdGFyIHx8IGNoYW5nZXMuZHdQYXJhZ3JhcGgpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==