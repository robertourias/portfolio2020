import {
  BrowserModule
}

from '@angular/platform-browser';

import {
  NgModule
}

from '@angular/core';

import {
  AppComponent
}

from './app.component';

import {
  HeaderComponent
}

from './core/header/header.component';

import {
  FooterComponent
}

from './core/footer/footer.component';

import {
  AboutComponent
}

from './sections/about/about.component';

import {
  ProjectsComponent
}

from './sections/projects/projects.component';

import {
  ServicesComponent
}

from './sections/services/services.component';

import {
  ContactComponent
}

from './sections/contact/contact.component';

import {
  BlogComponent
}

from './sections/blog/blog.component';

@NgModule( {
    declarations: [ AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent],
    imports: [ BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
  }

) export class AppModule {}
