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

  singlecomment :any ={

    id:0,
    postId :0,
    body : "",
    name:"",
    email:""


  };

constructor(private actRoute:ActivatedRoute, private _lastblog : blogService) {
 
}

  ngOnInit()
    {


var re=  this._lastblog.getmessage();
 console.log(re);

/*

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
        
          setComment(valus:any){

            this.comments.push(this.singlecomment);

          }

*/
}
