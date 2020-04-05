import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public cards: Array<{
    thumb: string;
    name: string;
    description: string;
    key: string;
  }>;

  constructor() {}

  ngOnInit(): void {
    this.cards = [
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      },
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      },
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      },
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      },
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      },
      {
        thumb: 'uolhost.jpg',
        name: 'UOLHost',
        description: `Site que simula a interação do usuário com a câmera do LG G3 usando a webcam. O projeto foi desenvolvido na Huia/W3haus
        e atuei como Desenvolvedor front-end.`,
        key: 'HTML 5, CSS 3, Javascript, Angular 8'
      }
    ];
  }
}
