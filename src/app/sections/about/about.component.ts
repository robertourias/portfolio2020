import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age: number;
  public firstname: string;
  public skills = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.age = PortfolioService.YEARSOLD;
    this.firstname = PortfolioService.FIRSTNAME;
    this.skills = this.portfolioService.getSkills();
  }
}
