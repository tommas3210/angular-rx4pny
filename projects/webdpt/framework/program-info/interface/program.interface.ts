/**
 * 作業參數
 *
 * @export
 */
export interface IDwOperationParameter {
  [key: string]: any;
}

/**
 * 作業資訊(含作業編號)
 */
export interface IDwProgramData {
  id: string; // 作業編號
  module: string; // 模組編號。等同權限模組
  type: string; // 類型:帆軟報表='fineReport', 一般內嵌網頁='externalUrl'
  routerLink: string; // 頁面路由
  menuId?: string; // 選單編號。動態從Menu產生的作業必須從Menu取得完整資訊
  code: string; // 原始作業或報表編號
  parameter: Array<IDwOperationParameter>; // 作業參數
  // name: string; // 作業名稱：暫時記錄IAM行為名稱，以供只在IAM設定但沒在i18n設定多語言的名稱，等互聯應用管理中心有多語言機制再拿掉
}

/**
 * 作業資訊
 */
export interface IDwProgram {
  module: string; // 模組編號。等同權限模組
  type: string; // 類型:帆軟報表='fineReport', 一般內嵌網頁='externalUrl'
  routerLink: string; // 頁面路由
  menuId?: string; // 選單編號。動態從Menu產生的作業必須從Menu取得完整資訊
  code: string; // 原始作業或報表編號
  parameter: Array<IDwOperationParameter>; // 作業參數
  // name: string; // 作業名稱：暫時記錄IAM行為名稱，以供只在IAM設定但沒在i18n設定多語言的名稱，等互聯應用管理中心有多語言機制再拿掉
}

export interface IDwOperationMap {
  [id: string]: IDwProgram;
}
