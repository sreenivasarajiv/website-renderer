import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-website-view',
  templateUrl: './website-view.component.html',
  styleUrls: ['./website-view.component.css']
})
export class WebsiteViewComponent implements OnInit {

  public websiteName = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.websiteName = this.sanitizer.bypassSecurityTrustResourceUrl(params.get('websiteName'));
    });
  }

}
