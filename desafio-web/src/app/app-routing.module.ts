import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './features/layout/layout.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {  
        path: 'vagas',
        loadChildren: () =>
          import('./features/vagas/vagas.module').then(m => m.VagasModule),
      },
      {  
        path: 'candidaturas',
        loadChildren: () =>
          import('./features/candidaturas/candidaturas.module').then(m => m.CandidaturasModule),
      },
      {  
        path: 'candidatos',
        loadChildren: () =>
          import('./features/candidatos/candidatos.module').then(m => m.CandidatosModule),
      },
    ]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
