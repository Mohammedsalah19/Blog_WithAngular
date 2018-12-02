

import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router'
import {BlogComponent} from './blog'
import {homeComponent} from './home'
import {aboutComponent} from './about'


const appRoute: Routes=[

    {
    path:'',
    component :homeComponent

    },


    {

        path:'about',
    component :aboutComponent

    },

    {
    path:'blog/:id',
    component :BlogComponent


    }


    ];
    export const routing : ModuleWithProviders = RouterModule.forRoot(appRoute);
