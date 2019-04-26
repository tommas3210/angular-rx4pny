// /**
//  * 權限-作業內部頁面
//  */
// export interface IDwAuthorizedPage {
//   id: string;
//   name: string;
//   routerLink: string;
// }

/**
 * 權限-功能權限
 */
export interface IDwAuthorizedAction {
  id: string; // 按鈕編號
  restriction: string; // 按鈕功能限制 allow, hidden, disabled
}

// /**
//  * 作業參數
//  */
// export interface IDwAuthorizedParam {
//   id: string; // 參數編號
//   value: string; // 值
// }

// /**
//  * 權限資料
//  */
// export interface IDwAuthorized {
//   id: string;
//   type: string; // 類型
//   name: string; // 顯示名稱
//   iconClass: string;
//   level: number; // 節點層級，從1開始
//   disabled: boolean; // 是否禁用，預設false
//   selected: boolean; // 是否被選中，預設false
//   open: boolean; // 是否展開，預設false
//   programId: string; // 作業編號
//   programBase: string; // 作業基礎程式
//   routerLink: string; // 頁面路由
//   url: string; // 連結網址
//   child: IDwAuthorized[];
//   page?: IDwAuthorizedPage[]; // 作業內部頁面
//   action?: IDwAuthorizedAction[]; // 功能權限
//   parameter?: IDwAuthorizedParam[]; // 作業參數
// }


export interface IDwAuthorizedItem {
  programId: string; // 作業編號
  action?: IDwAuthorizedAction[]; // 功能權限
}

/**
 * 作業與功能權限
 */
export interface IDwAuthorizedList {
  // id包含作業和子頁面的id
  [id: string]: IDwAuthorizedItem;
}
