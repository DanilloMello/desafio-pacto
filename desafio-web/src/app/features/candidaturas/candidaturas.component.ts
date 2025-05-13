import { Component } from '@angular/core';
import { Candidatura } from '../../core/modal/candidatura';
import { CandidaturaService } from '../../core/services/candidatura.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-candidaturas',
  templateUrl: './candidaturas.component.html',
  styleUrls: ['./candidaturas.component.sass'],
  standalone: false
})
export class CandidaturasComponent {

  candidaturas: Candidatura[] = [] ;

  candidaturaSelecionada: Candidatura | null = null;

  constructor(
    private candidaturaService: CandidaturaService,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.setUpInicial();
  }
  setUpInicial() {
    this.candidaturaService.getCandidaturas().subscribe( 
      candidaturas => { 
        if (candidaturas){
          this.candidaturas = candidaturas
          this.candidaturaSelecionada = candidaturas[0]
        }     
      },
      error => this.snackBar.open(error.error, 'Fechar', {duration: 5000})
    );
  }

  selecioneCandidatura(vaga: Candidatura) {
    this.candidaturaSelecionada = vaga
  }

}
