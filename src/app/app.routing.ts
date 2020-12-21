import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BundleComponent } from './bundle';
import { AuthGuard } from './_guards';
import { PacksComponent } from './packs/packs.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bundle', component: BundleComponent },
    { path: 'packs', component: PacksComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });