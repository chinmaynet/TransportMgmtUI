import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedVariable: any;
  setSharedVariable(data: any) {
    this.sharedVariable = data;
  }

  getSharedVariable() {
    return this.sharedVariable;
  }
}
