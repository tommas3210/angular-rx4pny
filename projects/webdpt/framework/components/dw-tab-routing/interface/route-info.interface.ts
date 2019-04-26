import { Params } from '@angular/router';

export interface IDwRouteInfo {
    id: string; // 等於執行期的programId => operation.code
    menuId?: string; // 從Menu開啟作業時記錄，為了1.取得Menu節點名稱 2.與Menu互動
    name: string;
    routerLink: string;
    queryParams?: Params;
    params?: Params;
    selected?: boolean;
    scrollHeight?: number;
    scrollTop?: number;
    iconClass?: string;
    canClose?: boolean;
    canMultiOpen?: boolean;
    defaultOpen?: boolean;
    type?: string;
    outerUrl?: string;
    reload?: boolean;
    module?: string;
}

