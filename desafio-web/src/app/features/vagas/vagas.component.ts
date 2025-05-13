import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../core/modal/vaga';
import { UsuarioService } from '../../core/services/usuario.service';
import { VagaService } from '../../core/services/vaga.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.sass'],
  standalone: false
})
export class VagasComponent implements OnInit {

  vagas: Vaga[] = [];

  vagaSelecionada: Vaga | null = null;
  errorMessage: string | null = null;

  constructor(
    private snackBar: MatSnackBar,
    private vagaService: VagaService,
    private authService: UsuarioService
  ) {}
  
  ngOnInit(): void {
    this.buscaVagas();

  }

  buscaVagas() {
    this.vagaService.getVagas().subscribe(
      vagas => { 
        if (vagas){
          this.vagas = vagas
          this.vagaSelecionada = vagas[0]
        }     
      },
      error => this.snackBar.open(error.error, 'Fechar', {duration: 5000})
    );
  }

  handleVagaFormValue(vaga: Vaga) {
  const request = vaga.id
    ? this.vagaService.atualiza(vaga)
    : this.vagaService.salva(vaga);

      request.subscribe({
        next: () => {
          this.buscaVagas();
        },
        error: (error) => {
          this.snackBar.open(error.error, 'Fechar', {duration: 5000});
        }
      });
  }
  
  criaVaga() {
    this.vagaSelecionada = null;
    this.errorMessage = null;
  }

  selecioneVaga(vaga: Vaga) {
    this.vagaSelecionada = vaga
  }

  deletaVaga(vaga: Vaga){
    this.vagaSelecionada = null
    this.vagaService.deleta(vaga.id).subscribe({
      next: () => {
        this.buscaVagas();
      },
      error: (error) => {
        this.buscaVagas();
        this.snackBar.open(error.error, 'Fechar', {duration: 5000});
      }
    });

  }

  get isEmpresa(){
    return this.authService.getRole() === 'EMPRESA'
  }

}
