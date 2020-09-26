import { Component, OnInit } from '@angular/core';
import { WebsitesService } from '../websites.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  public websites: { id: number, name: string }[] = [];

  constructor(private websiteService: WebsitesService) { }

  ngOnInit(): void {
    this.websiteService.getWebsites().subscribe(websites => this.websites = websites);
  }

}
