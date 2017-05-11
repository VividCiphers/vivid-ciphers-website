import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { HeroBannerComponent } from './landing-page/hero-banner/hero-banner.component';
import { TeamComponent } from './landing-page/team/team.component';
import { TeamListingComponent } from './landing-page/team-listing/team-listing.component';
import { SkillSetComponent } from './landing-page/skill-set/skill-set.component';
import { SkillListingComponent } from './landing-page/skill-listing/skill-listing.component';
import { ProjectSlideComponent } from './landing-page/project-slide/project-slide.component';
import { NewsletterSubscribeComponent } from './landing-page/newsletter-subscribe/newsletter-subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

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
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
