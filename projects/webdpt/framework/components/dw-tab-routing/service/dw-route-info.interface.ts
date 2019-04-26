import { IDwRouteInfo } from '@webdpt/framework';

export interface IDwRouteInfoService {
  createDefaultTab(): Promise<any>;
  clear(): void;
  create(route: IDwRouteInfo, defaultTab?: boolean): void;
}
