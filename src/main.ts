import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import '@fontsource/inter';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // provideAnimations()
  ]
});