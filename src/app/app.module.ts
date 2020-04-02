import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, ProfileService } from './core';
import {
  AboutComponent,
  ProjectsComponent,
  ContactComponent,
  BlogComponent,
  ResumeComponent
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
    ResumeComponent
  ],
  imports: [BrowserModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
