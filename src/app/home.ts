import{Component,OnInit} from '@angular/core';
import{homeService} from './service/home.service';

@Component({

    selector: 'home',
    templateUrl: "tempelte/home.html",
    providers:[homeService]
})

export class homeComponent{ 

  blogs :any =[];
constructor(private _lastblog : homeService) {
 
}

ngOnInit(){

  this._lastblog.getAllPosts().subscribe(

    datat=>{
      for(var i=0 ;i<12;i++)
        {
      this.blogs.push(datat[i]);
        }
    }
    
  )
}
}