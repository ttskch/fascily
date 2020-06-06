import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private siteTitle: string = 'fascily';
  private defaultDescription: string = 'いちばんシンプルなタスク管理ツール';
  private subTitle: string;
  private description: string;

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  get title(): string {
    return this.subTitle ? this.subTitle + ' | ' + this.siteTitle : this.siteTitle;
  }

  ngOnInit(): void {
  }

  onActivate(component) {
    this.subTitle = component.subTitle;
    this.description = component.description || this.defaultDescription;
    this.setHeadTag();
  }

  private setHeadTag() {
    this.titleService.setTitle(this.title);

    const metaTags = [
      { name: 'description', content: this.description },
      { property: 'og:site_name', content: this.siteTitle },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: this.title },
      { property: 'og:description', content: this.description },
      { property: 'og:url', content: '' },
      { property: 'og:image', content: '' },
      // { property: 'article:author', content: 'https://www.facebook.com/username' },
      // { property: 'fb:admins', content: 'user_id' },
      { property: 'fb:app_id', content: '186549258503363' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@username' },
      // { name: 'twitter:creator', content: '@username' },
    ];

    metaTags.map(tag => {
      this.metaService.updateTag(tag);
    });
  }
}
