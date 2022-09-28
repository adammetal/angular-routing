import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { parent: '' } },
  {
    path: 'home',
    component: HomeComponent,
    data: { parent: '' },
    children: [
      {
        path: 'news',
        component: NewsComponent,
        data: { parent: 'home' },
      },
      {
        path: 'news/:id',
        component: NewsComponent,
        data: { parent: 'home' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { parent: 'home' },
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        data: { parent: 'home' },
      },
    ],
  },
  { path: 'about', component: AboutComponent, data: { parent: '' } },
  { path: 'contact', component: ContactComponent, data: { parent: '' } },
  { path: '**', component: NotfoundComponent, data: { parent: '' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
