import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public static NAME = 'Roberto Nicoletti';
  public static YEARSOLD = 32;
  public static TIMEEXPERIENCE = 10;

  constructor() { }

  getSkills(): Array<{name: string, score: number}> {
    const skills = [
      { name: 'HTML 5', score: 95 },
      { name: 'CSS 3', score: 95 },
      { name: 'LESS', score: 95 },
      { name: 'SASS', score: 98 },
      { name: 'SMACSS', score: 90 },
      { name: 'ITCSS', score: 90 },
      { name: 'POSTCSS', score: 90 },
      { name: 'SASS COMPASS', score: 90 },
      { name: 'Javascript', score: 90 },
      { name: 'ES8', score: 90 },
      { name: 'Gruntjs', score: 90 },
      { name: 'Gulpjs', score: 90 },
      { name: 'Angular 9', score: 85 },
      { name: 'React', score: 40 },
      { name: 'React Native', score: 30 },
      { name: 'Node', score: 20 },
      { name: 'JQuery', score: 95 }
    ];

    return skills;
  }

  getProjects(): Array<{name: string, thumb: string}> {
    const projects = [
      { name: 'UOL Host', thumb: 'img.jpg'}
    ];

    return projects;
  }
}
