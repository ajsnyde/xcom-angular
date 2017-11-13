import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ResearchTopic } from '../models/research.model';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchViewComponent implements OnInit {

  availableResearch: ResearchTopic[] = [];

  constructor(private http: Http, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    if (ResearchTopic.allResearch.length == 0)
      this.http.request('../../assets/json/research.json').subscribe(response => {
        ResearchTopic.allResearch = response.json();
        this.ref.detectChanges();
      });
  }

  getAvailable(): ResearchTopic[] {
    return ResearchTopic.getAvailable();
  }
  research(research) {
    ResearchTopic.research(research);
    this.ref.detectChanges();
  }
}
