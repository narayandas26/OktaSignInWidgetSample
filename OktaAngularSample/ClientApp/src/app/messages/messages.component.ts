import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { HttpClient } from '@angular/common/http';

import sampleConfig from '../app.config';
import { OKTA_AUTH } from '@okta/okta-angular';

interface Message {
  date: string;
  text: string;
  index: number;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {



  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, private http: HttpClient) {
    
  }

  async ngOnInit() {
    const accessToken = this.oktaAuth.getAccessToken();
    
  }
}
