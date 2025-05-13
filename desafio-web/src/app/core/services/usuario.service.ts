import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from '../modal/candidato';
import { SignupForm } from '../modal/signupform';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080';
  private serviceUrl = '/usuario';

  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string) {
    return this.http.post<{ user: string, token: string, role: string }>(this.baseUrl + this.serviceUrl + '/login', { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  saveRole(token: string) {
    localStorage.setItem('role', token);
  }

  saveLogguedUser(email: string) {
    localStorage.setItem('user', email);
  }

  signup(form: SignupForm) {
    return this.http.post<{ user: string, token: string, role: string }>(this.baseUrl + this.serviceUrl + '/signup', form);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getLogguedUser(): string | null {
    return localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCandidatos() {
  return this.http.get<Candidato[] | null>(this.baseUrl + this.serviceUrl + '/candidatos', {
      params: {
        email: this.getLogguedUser()!
      }
  });
}

}
