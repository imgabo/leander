import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


  jsonToDataParse(data : any) {
    data = JSON.parse(data)
    data = JSON.parse(data.resultado)
    data = data.JsonResponse
    return data;
  }
}
