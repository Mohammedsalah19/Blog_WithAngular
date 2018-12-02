

    import {Injectable}from "@angular/core";
    import {Http, Response}from "@angular/http";
    import {Observable}from "rxjs/Rx";

    import "rxjs/add/operator/map";
    @Injectable()

    export class homeService{

    constructor( private _http :Http) {

    }

    getAllPosts(){

    return this._http.get("https://jsonplaceholder.typicode.com/photos")
    .map(res=>res.json());

    }

    }