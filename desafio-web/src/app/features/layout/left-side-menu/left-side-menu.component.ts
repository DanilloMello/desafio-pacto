import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.sass'],
  standalone: false
})
export class LeftSideMenuComponent {

  constructor(
    private authService: UsuarioService,
    private router: Router
  ){}

  logout(){
    this.authService.logout();
  }

  redirectTo(page: string){
    this.router.navigate([page]);
  }

  get isEmpresa(){
    return this.authService.getRole() == 'EMPRESA';
  }

}
