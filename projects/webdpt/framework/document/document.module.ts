import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DwDocSaveDirective, DwDocDeleteDirective, DwDocReadDirective} from './directive';
import { DwMetadataService } from './metadata.service';
import { DwDocument } from './document';
import { DwReadService, DwCreateService, DwDeleteService, DwListService, DwUpdateService } from './service';


/**
 * Document Module
 *
 * @export
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DwDocSaveDirective,
    DwDocDeleteDirective,
    DwDocReadDirective
  ],
  exports: [
    DwDocSaveDirective,
    DwDocDeleteDirective,
    DwDocReadDirective
  ]
})
export class DwDocumentModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwDocumentModule,
      providers: [
        DwMetadataService,
        DwDocument,
        DwReadService,
        DwCreateService,
        DwUpdateService,
        DwDeleteService,
        DwListService,
        { provide: 'DocumentID', useValue: '' },
        { provide: 'DocumentResource', useValue: '' },
        ...providers
      ]
    };
  }
}
