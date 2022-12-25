import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gitInfo from '../../../assets/json/gitInfo.json';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  organizationName: string = gitInfo.organizationName;
  repositoryName: string = gitInfo.repositoryName;

  item: any;
  isReady: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe((params) => {
      const issueNumber = params.issueNumber;
      this.getGitHubIssueDetail(issueNumber);
    });
  }

  ngOnInit(): void {}

  private async getGitHubIssueDetail(issueNumber): Promise<any> {
    this.http
      .get<any>(
        `https://api.github.com/repos/${this.organizationName}/${this.repositoryName}/issues/${issueNumber}`
      )
      .subscribe((data) => {
        this.item = data;
        this.isReady = true;
      });
  }
}
