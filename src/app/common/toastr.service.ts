import {Injectable} from "@angular/core";
declare let require
@Injectable()
export class ToastrService {
  private _toastr = require('../../../node_modules/toastr/toastr.js');
  success(message: string, title?:string): void {
    this._toastr.success(message,title);
  }
  info(message: string, title?:string): void {
    this._toastr.info(message,title);
  }

}
