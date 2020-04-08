import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, PortfolioService } from './core';
import {
  AboutComponent,
  ProjectsComponent,
  ContactComponent,
  BlogComponent,
  ResumeComponent,
  SkillsComponent,
  ServicesComponent
} from './sections';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    BlogComponent,
    ResumeComponent,
    SkillsComponent,
    ServicesComponent
  ],
  imports: [BrowserModule, CommonModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
