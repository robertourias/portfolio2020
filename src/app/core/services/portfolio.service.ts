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
      { name: 'HTML 5', score: 9.5 },
      { name: 'CSS 3', score: 9.5 },
      { name: 'Javascript', score: 9 },
      { name: 'Angular 9', score: 8.5 }
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
