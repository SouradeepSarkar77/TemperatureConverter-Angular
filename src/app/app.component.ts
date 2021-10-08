import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tempConv';
  selected:any;
  degree:number=0;
  result:number=0;

  convert(data:any) {
    this.degree=data;
    if(this.selected === "Farenheit")
    {
      data=parseFloat(data);
      this.result=Math.round((data-32)/1.8);
      console.warn(this.result);
    }
    if(this.selected === "Kelvin")
    {
      data=parseFloat(data);
      this.result=(data-273.15);
      console.warn(this.result);
    }
    
  }
}
