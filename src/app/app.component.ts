import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

            <nav style="background-color:gray" class="navbar navbar-defualt" style="color:red">
  <div class="container">
    <div class="navbar-header" >
      <button  type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
        <span class="sr-only">Toggle Nav </span>
        <span class="icon-bar" ></span>
        <span class="icon-bar"  ></span>
        <span class="icon-bar" ></span> 
      </button>
      <a class="navbar-brand" style="color:black"  href="home">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav" >
        <li class="active" style="color:black blod;background-color:wheat" ><a style="color:black;" [routerLink]='["/"]'>home</a></li>
        <li ><a style="color:black;" [routerLink]='["/about"]'>About</a></li>
        <li ><a style="color:black;" [routerLink]='["/blog"]'>blog</a></li>

      </ul>
   
    </div>
  </div>
</nav>



  <div>
  <router-outlet></router-outlet>
  </div>


  
  `,
})
export class AppComponent  { }
