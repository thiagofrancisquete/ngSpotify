import { RouterConfig, provideRoutes } from '@angular/router';
import { SearchComponent } from './app/components/search/search.component';
import { AboutComponent } from './app/components/about/about.component';

const routes: RouterConfig = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

export const appRouterProviders = [
  provideRoutes(routes),
];
