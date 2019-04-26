import { Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class DwBreadCrumbComponent implements OnInit, OnDestroy {
    private _injector;
    private _separator;
    private $destroy;
    isTemplateRef: boolean;
    dwAutoGenerate: boolean;
    dwSeparator: string | TemplateRef<void>;
    breadcrumbs: BreadcrumbOption[];
    getBreadcrumbs(route: ActivatedRoute, url?: string, breadcrumbs?: BreadcrumbOption[]): BreadcrumbOption[];
    constructor(_injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
