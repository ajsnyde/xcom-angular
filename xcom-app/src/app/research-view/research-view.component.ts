import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ResearchTopic } from '../models/research.model';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.css']
})
export class ResearchViewComponent implements OnInit {

  allResearch: ResearchTopic[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.request('../../assets/json/research.json').subscribe(response => {
      ResearchTopic.allResearch = response.json();
      ResearchTopic.updateAvailable();
      this.allResearch = ResearchTopic.allResearch;
    });

  }
}
