import { InjectionToken } from '@angular/core';
import { IDwSelectModalConfig } from '../components/select-modal/interface/select-modal.interface';

export const DW_APP_ID: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwAppId'); // Application ID(對應到互聯應用管理中心)
// export const APP_API_URL: InjectionToken<string> = new InjectionToken('dwSystemConfig.apiUrl'); // API網址
// export const APP_IAM_URL: InjectionToken<string> = new InjectionToken('dwSystemConfig.iamUrl'); // IAM網址
// export const APP_DMC_URL: InjectionToken<string> = new InjectionToken('dwSystemConfig.dmcUrl'); // 文檔中心網址
export const APP_DEFAULT: InjectionToken<string> = new InjectionToken('dwSystemConfig.defaultApp'); // 首頁路徑
export const Logo_Path: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwLogoPath'); // Logo圖檔路徑
export const APP_DATE_FORMAT: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwDateFormat'); // 日期格式
export const APP_TIME_FORMAT: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwTimeFormat'); // 時間格式
export const DW_MOCK: InjectionToken<{ db, methods }> = new InjectionToken<{ db, methods }>('DW_MOCK'); // mock data config
export const DW_PROGRAM_WEBDPT_JSON: InjectionToken<Array<any>> = new InjectionToken('DW_PROGRAM_WEBDPT_JSON'); // 平台作業清單靜態設定檔(僅平台使用)
export const DW_PROGRAM_JSON: InjectionToken<Array<any>> = new InjectionToken('dwSystemConfig.dwProgramList'); // 作業清單靜態設定檔
export const DW_PROGRAM_PAGE: InjectionToken<Array<any>> = new InjectionToken('dwSystemConfig.dwProgramPageList'); // 作業子頁面設定檔
export const DW_PROGRAM_ACTION: InjectionToken<Array<any>> = new InjectionToken('dwSystemConfig.dwProgramActionList'); // 作業功能設定檔
export const DW_MENU_JSON: InjectionToken<Array<any>> = new InjectionToken('dwSystemConfig.dwMenuJson'); // Menu靜態設定檔
export const DW_USING_TAB: InjectionToken<boolean> = new InjectionToken<boolean>('systemConfig.dwUsingTab'); // 是否啟用多頁佈局
export const DW_TAB_MULTI_OPEN: InjectionToken<boolean> = new InjectionToken('dwSystemConfig.dwTabMultiOpen'); // 多頁佈局預設是否可重覆開啟作業
export const DW_TAB_ROUTE_CONFIG_JSON: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwTabRouteConfigJson'); // 多頁佈局預設開啟作業
// export const DW_FR_URL: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwFrUrl'); // 帆軟報表網址
export const DW_USING_FRSSO: InjectionToken<boolean> = new InjectionToken('dwSystemConfig.dwFrSSO'); // 啟用帆軟報表SSO
// export const DW_FR_SIGN_URL: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwFrSignUrl'); // 帆軟報表數位簽章服務網址

// 開窗服務的共用設定值
export const DW_SELECT_MODAL_DEFAULT: InjectionToken<IDwSelectModalConfig> = new InjectionToken('dwSystemConfig.dwSelectModalDefault');
export const DW_LANGUAGE_JSON: InjectionToken<Array<any>> = new InjectionToken('dwSystemConfig.dwLanguageJson'); // 可用語言清單
export const DW_LANG_LOADER: InjectionToken<any> = new InjectionToken('DW_LANG_LOADER'); // 翻譯檔載入器
export const DW_SSO_LOGIN: InjectionToken<any> = new InjectionToken('DW_SSO_LOGIN'); // IDwSsoLogin 的 interface[], ssologin 時 可以 loop 調用.
export const LONIG_DEFAULT: InjectionToken<string> = new InjectionToken('dwSystemConfig.defaultLogin'); // 登入頁路徑
export const DW_MULTI_TENANT: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwMultiTenant'); // 是否為多租戶
export const DW_APP_AUTH_TOKEN: InjectionToken<string> = new InjectionToken('dwSystemConfig.dwAppAuthToken'); // IAM的[各應用系統的AppToken].
export const DW_LOAD_MASK_HTTP: InjectionToken<boolean> = new InjectionToken('dwSystemConfig.dwLoadMaskHttp'); // HTTP加載遮罩是否啟用
export const DW_LOAD_MASK_DELAY: InjectionToken<number> = new InjectionToken('dwSystemConfig.dwLoadMaskDelay'); // 延遲顯示加載效果的時間毫秒

// 開發環境變數
export const DW_SYSTEM_CONFIG: any = {
  dwAppId: 'sampleApp1',
  defaultApp: '/',
  dwLogoPath: './assets/img/i18n/zh_TW/logo/dwLogo.svg',
  dwDateFormat: 'yyyy/MM/dd',
  dwTimeFormat: 'HH:mm:ss',
  dwUsingTab: false,
  dwTabMultiOpen: false,
  dwFrSSO: false,
  defaultLogin: '/login',
  dwMultiTenant: false,
  dwAppAuthToken: '',
  dwLoadMaskHttp: false,
  dwLoadMaskDelay: 0
};
