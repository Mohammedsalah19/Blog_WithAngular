import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

    // import routing
import { homeComponent }  from './home';
import { aboutComponent }  from './about';
import { BlogComponent }  from './blog';
import { routing }  from './rout';
//import { homeService }  from './service/home.service';


// import http for api
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ,routing,HttpModule],

   declarations: [
     AppComponent,
     homeComponent,
     aboutComponent,
     BlogComponent, 
      
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
