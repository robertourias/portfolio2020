import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skills: Array<{ name: string; color: string; value: number }>;

  constructor() {}

  ngOnInit(): void {
    this.skills = [
      { name: 'HTML', color: 'blue', value: 90 },
      { name: 'CSS', color: 'pink', value: 20 },
      { name: 'Javacript', color: 'green', value: 50 },
      { name: 'Angular 8', color: 'orange', value: 75 },
      { name: 'React', color: 'span', value: 80 }
    ];
  }
}
