import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const routes: Routes = [
    { path: '', component: HomeComponent,},
    { path: 'about', component:AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'home', component: HomeComponent },
    { path: 'heroe/:id', component:HeroeComponent},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
