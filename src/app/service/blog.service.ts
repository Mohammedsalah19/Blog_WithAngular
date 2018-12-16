

    import {Injectable}from "@angular/core";
    import {Http, Response}from "@angular/http";
    import {Observable}from "rxjs/Rx";

    import "rxjs/add/operator/map";
    @Injectable()

    export class blogService
    
{
    constructor( private _http :Http) {
    }
    getblogData(id:number)
    {
       return this._http.get("https://jsonplaceholder.typicode.com/posts/"+id).map(res=>res.json());
    }
     getBlogPic(id:number)
    {
      return  this._http.get("https://jsonplaceholder.typicode.com/photos/"+id).map(res=>res.json());
    }
    getBlogComment(id:number)
    {
      return  this._http.get("https://jsonplaceholder.typicode.com/comments?postId="+id).map(res=>res.json());

    }

}