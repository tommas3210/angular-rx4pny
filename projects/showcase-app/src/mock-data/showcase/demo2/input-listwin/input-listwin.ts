import { RequestInfo } from 'angular-in-memory-web-api';
import { IDwMockData } from '@webdpt/framework';
import { demo2InputListwin } from './input-listwin-data';

class Demo2InputListwinMockData implements IDwMockData {

  get data(): any {
    return demo2InputListwin;
  }

  getMethod(reqInfo: any): any {
    return reqInfo.collection;
  }

  postMethod(reqInfo: any): any {
    const mockResp = [];
    let key = 1;
    for (let i = 0; i < 1; i++) { // 可以產生多筆資料.
      const object = Object.assign({}, reqInfo.collection);
      for (let j = 0; j < Object.keys(object).length; j++) {
        object[j].id = key;
        object[j].quantity = key;
        mockResp.push(Object.assign({}, object[j]));
        key++;
      }

    }

    return mockResp;
    // return reqInfo.collection;
  }

  deleteMethod(reqInfo: RequestInfo): any {
    return [];
  }

  putMethod(reqInfo: RequestInfo): any {
    return [];
  }
}

export let demo2InputListwinData = new Demo2InputListwinMockData();
