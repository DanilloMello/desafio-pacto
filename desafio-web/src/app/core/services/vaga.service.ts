import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Vaga } from '../modal/vaga';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private apiUrl = 'http://localhost:8080/vaga/'; 

  constructor(
    private http: HttpClient,
    private authService: UsuarioService
  ) {}

  getVagas() {
    return this.http.get<Vaga[] | null>(this.apiUrl, {
      params: {
        email: this.authService.getLogguedUser()!
      }
    });
  }

  salva(vaga: Vaga) {
    const usuario = this.authService.getLogguedUser();
    return this.http.post<String>(this.apiUrl, {...vaga, usuario}, { responseType: 'text' as 'json' });
  }

  atualiza(vaga: Vaga){
    return this.http.put<String>(this.apiUrl, vaga, { responseType: 'text' as 'json' });
  }

  deleta(id: number) {
    return this.http.delete<String>(this.apiUrl, {
      params: {
        id: id
      },
      responseType: 'text' as 'json'
    });
  }
  

}
