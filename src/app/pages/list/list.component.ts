import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public list: Array<any> = [];

  // https://placehold.it/500x100?text=ad가 뜨지 않고 있는 관계로 임시 url
  public advBannerImage: string =
    'https://vrthumb.imagetoday.co.kr/2022/01/07/ti155t001020.jpg';
  private advBannerUrl: string = 'https://thingsflow.com/ko/home ';

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.getGitHubIssueList();
  }

  private async getGitHubIssueList(): Promise<any> {
    this.http
      .get<any>(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments`
      )
      .subscribe((data) => {
        this.list = data;
        console.log('lists', this.list);
      });
  }

  public detailAdv(url: string): void {
    window.open(this.advBannerUrl);
  }
}
