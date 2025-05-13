import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidatura } from '../modal/candidatura';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {

  private apiUrl = 'http://localhost:8080/candidatura/'; 

  constructor(
    private http: HttpClient,
    private authService: UsuarioService
  ) {}

  getCandidaturas() {
    return this.http.get<Candidatura[] | null>(this.apiUrl, {
      params: {
        email: this.authService.getLogguedUser()!
      }
    });
  }

  candidate(id: Number) {
    return this.http.post<String | null>(this.apiUrl, 
      {      
        usuario: this.authService.getLogguedUser(),
        vagaId: id
      },
      { 
        responseType: 'text' as 'json'
      }
    );
  }

  salvaFeedback(id: Number, feedback: string) {
    return this.http.post<string>(this.apiUrl + 'feedback', 
      {      
        empresaEmail: this.authService.getLogguedUser(),
        candidatoId: id,
        feedback: feedback
      },
      { 
        responseType: 'text' as 'json'  
      }
    );
  }

}
