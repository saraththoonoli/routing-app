import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public name:string=''

  constructor(public activatedroute:ActivatedRoute){
    console.log(activatedroute);
    activatedroute.params.subscribe((param:any)=>{
      console.log(param);
      this.name=param.name
      
    })
    
  }

}

