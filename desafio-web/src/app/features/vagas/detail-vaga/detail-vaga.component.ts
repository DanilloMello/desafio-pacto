import { Component, Input } from '@angular/core';
import { Vaga } from '../../../core/modal/vaga';
import { CandidaturaService } from '../../../core/services/candidatura.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-vaga',
  templateUrl: './detail-vaga.component.html',
  styleUrls: ['./detail-vaga.component.sass'],
  standalone: false
})
export class DetailVagaComponent {

  @Input()
  vagaSelecionada: Vaga | null = null;

  constructor(
    private candidaturaService: CandidaturaService,
    private snackBar: MatSnackBar
  ) { }
  


  candidate() {
    this.candidaturaService.candidate(this.vagaSelecionada!.id).subscribe( 
      resp => {},
      error => this.snackBar.open(error.error, 'Fechar', {
            duration: 5000
          })
    );
  }   
 
}
