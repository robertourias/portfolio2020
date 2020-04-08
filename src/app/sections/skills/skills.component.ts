import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: Array<{ name: string, score: number }>;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    let color = 1;
    this.skills = this.portfolioService.getSkills().map(skill => {
      switch (color) {
        case 1:
          skill.color = 'pink';
          break;
        case 2:
          skill.color = 'blue';
          break;
        case 3:
          skill.color = 'green';
          break;
        case 4:
          skill.color = 'span';
          break;
        case 5:
          skill.color = 'orange';
          break;
        case 6:
          skill.color = 'lightgreen';
          break;
        case 7:
          skill.color = 'yellow';
          break;
        case 8:
          skill.color = 'purple';
          break;
      }

      color++;
      if (color === 9) {
        color = 1;
      }

      return skill;
    });
  }
}
