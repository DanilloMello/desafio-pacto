import { Component, Input } from '@angular/core';
import { Candidato } from '../../../core/modal/candidato';
import { CandidaturaService } from '../../../core/services/candidatura.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-candidatos',
  templateUrl: './detail-candidatos.component.html',
  styleUrl: './detail-candidatos.component.sass',
  standalone: false
})
export class DetailCandidatosComponent {

  @Input() candidatoSelecionado: Candidato | null = null;
  mensagemTexto: string = '';

  constructor(
    private candidaturaService: CandidaturaService,
    private snackBar: MatSnackBar
  ) { }

  enviarMensagem() {
    this.candidaturaService.salvaFeedback(this.candidatoSelecionado!.id, this.mensagemTexto)
      .subscribe(
        resp => this.snackBar.open(resp, 'Fechar', { duration: 5000 }),
        error => this.snackBar.open(error.error, 'Fechar', { duration: 5000 })
      )
  }

}
