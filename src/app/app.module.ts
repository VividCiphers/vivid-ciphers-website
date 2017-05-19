import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { HeroBannerComponent } from './home-page/hero-banner/hero-banner.component';
import { TeamComponent } from './home-page/team/team.component';
import { TeamListingComponent } from './home-page/team-listing/team-listing.component';
import { SkillSetComponent } from './home-page/skill-set/skill-set.component';
import { SkillListingComponent } from './home-page/skill-listing/skill-listing.component';
import { ProjectSlideComponent } from './home-page/project-slide/project-slide.component';
import { NewsletterSubscribeComponent } from './home-page/newsletter-subscribe/newsletter-subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactFormComponent } from './home-page/contact-form/contact-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomePageComponent},
  {path:'about', component: AboutPageComponent},
  {path:'register', component: SignupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    HeroBannerComponent,
    TeamComponent,
    TeamListingComponent,
    SkillSetComponent,
    SkillListingComponent,
    ProjectSlideComponent,
    NewsletterSubscribeComponent,
    FooterComponent,
    ContactFormComponent,
    HomePageComponent,
    AboutPageComponent,
    SkillsPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
