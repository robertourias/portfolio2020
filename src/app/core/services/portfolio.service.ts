import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  static FIRSTNAME = 'Roberto';
  static LASTNAME = 'Nicoletti';
  static YEARSOLD = new Date().getFullYear() - 1987;
  static TIMEEXPERIENCE = new Date().getFullYear() - 2008;

  constructor() { }

  getSkills(): Array<{name: string, score: number}> {
    const skills = [
      { name: 'HTML 5', score: 95 },
      { name: 'CSS 3', score: 95 },
      { name: 'LESS', score: 95 },
      { name: 'SASS', score: 98 },
      { name: 'SMACSS', score: 90 },
      { name: 'BEMCSS', score: 90 },
      { name: 'ITCSS', score: 90 },
      { name: 'POSTCSS', score: 90 },
      { name: 'SASS COMPASS', score: 90 },
      { name: 'Javascript', score: 90 },
      { name: 'ES8', score: 90 },
      { name: 'Typescript', score: 90 },
      { name: 'Gruntjs', score: 90 },
      { name: 'Gulpjs', score: 90 },
      { name: 'Angular 9', score: 85 },
      { name: 'React', score: 40 },
      { name: 'React Native (Expo)', score: 30 },
      { name: 'MySQL', score: 30 },
      { name: 'SQL Server', score: 30 },
      { name: 'SQLite (Knexjs)', score: 30 },
      { name: 'AWS Storage', score: 30 },
      { name: 'AWS Database', score: 30 },
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
