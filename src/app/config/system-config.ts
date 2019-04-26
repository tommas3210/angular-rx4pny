import { DigiMiddlewareAuthApp } from './app-auth-token';

// 開發環境變數
export const SYSTEM_CONFIG: IAppConfig = {
  dwAppId: 'sampleApp1',
  defaultApp: '/',
  dwLogoPath: './assets/img/dwLogo.svg',
  dwDateFormat: 'yyyy/MM/dd',
  dwTimeFormat: 'HH:mm:ss',
  dwUsingTab: false,
  dwTabMultiOpen: false,
  dwFrSSO: false,
  defaultLogin: '/login',
  dwMultiTenant: false,
  dwAppAuthToken: DigiMiddlewareAuthApp,
  dwLoadMaskHttp: true,
  dwLoadMaskDelay: 0
};

export interface IAppConfig {
  dwAppId: string; // Application ID(對應到互聯應用管理中心)
  defaultApp: string; // 首頁路徑
  dwLogoPath: string; // Logo圖檔路徑
  dwDateFormat: string; // 日期格式
  dwTimeFormat: string; // 時間格式
  dwUsingTab: boolean; // 是否啟用多頁佈局
  dwTabMultiOpen: boolean; // 多頁佈局預設是否可重覆開啟作業
  dwFrSSO: boolean; // 啟用帆軟報表SSO
  defaultLogin: string; // 登入頁路徑
  dwMultiTenant: boolean; // 是否為多租戶
  dwAppAuthToken: string; // IAM 的 digi-middleware-auth-app [各應用系統的AppToken].
  dwLoadMaskHttp: boolean; // HTTP加載遮罩是否啟用
  dwLoadMaskDelay: number; // 延遲顯示加載效果的時間毫秒
}

function loadJSON(filePath: string): any {
  const json = loadTextFileAjaxSync(filePath, 'application/json');
  const obj = JSON.parse(json);
  return obj;
}

function loadTextFileAjaxSync(filePath: string, mimeType: string): string {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText;
  } else {
    return null;
  }
}
