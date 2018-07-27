import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

@Input() texto:String;

  constructor() { }

  ngOnInit() {
  }

}
