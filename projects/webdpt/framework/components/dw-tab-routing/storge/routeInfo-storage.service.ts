import { DwRouteInfoStorage } from './routeInfo-storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DwRouteInfoStrogeService {

  routeInfoStorage = new DwRouteInfoStorage;

  constructor(
  ) { }

  public setRouteInfo(routeInfo: any): void {
    this.routeInfoStorage.set(routeInfo.id, routeInfo.value);
  }

  public getRouteInfo(key: string): any {
    return this.routeInfoStorage.get(key);
  }
  public removeRouteInfo(key: string): void {
    this.routeInfoStorage.remove(key);
  }

  public clearRouteInfo(): void {
    this.routeInfoStorage.clear();
  }



}

