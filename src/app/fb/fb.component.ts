import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({ 
    selector: 'app-fb',
    templateUrl: './fb.component.html',
 })

 export class FbComponent implements OnInit {

    constructor(private fb: FacebookService) {
 
        let initParams: InitParams = {
          appId: '2464645380220377',
          xfbml: true,
          version: 'v2.8'
        };
     
        fb.init(initParams);     
      }

      ngOnInit() {
    }

}