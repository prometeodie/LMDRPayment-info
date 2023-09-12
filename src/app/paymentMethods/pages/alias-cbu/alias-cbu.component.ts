import { Component } from '@angular/core';

@Component({
  selector: 'alias-cbu',
  templateUrl: './alias-cbu.component.html',
  styleUrls: ['./alias-cbu.component.scss']
})
export class AliasCbuComponent {
  public alias: string = 'los.manijas.del.rol';
  public cbu: string = '0000003100077822682499';
  public isMessageShowed: boolean = false;
  public message: string = '';


  showMessage(field: String){
    this.message = `${field} copiado...`;
    this.isMessageShowed = true;
    setTimeout(() => {
      this.isMessageShowed = false;
    }, 2000);
  }

  copyText(text:string){
    return text;
  }
}
