import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../core/services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public skills = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }

}
