import{Component,OnInit} from '@angular/core';
import{blogService} from './service/blog.service';
import{ActivatedRoute} from '@angular/router';
    import {Observable}from "rxjs/Rx";




@Component({


    selector: 'blog',
   templateUrl: "tempelte/blog.html",
       providers:[blogService]

 
})

export class BlogComponent{ 


  blogs :any =[];

  id:number =0;
  photo:string="";
  title:string="";
  body:string="";
  comments:any[] ;


constructor(private actRoute:ActivatedRoute, private _lastblog : blogService) {
 
}

  ngOnInit()
    {

  this.id=this.actRoute.snapshot.params['id'];

        Observable.forkJoin(
        this._lastblog.getBlogPic(this.id), //0
         this._lastblog.getblogData(this.id), //1
         this._lastblog.getBlogComment(this.id) //2
          ).subscribe(
            data=>{
              this.title =data[1].title;
              this.body =data[1].boay;
              this.photo =data[0].url;
              this.comments= data[2];
            }
          );
  }


}
