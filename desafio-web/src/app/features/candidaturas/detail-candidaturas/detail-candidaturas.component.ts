import { Component, Input } from "@angular/core";
import { Candidatura } from "../../../core/modal/candidatura";

export enum StatusCandidatura {
  Inscrito = 0,
  Entrevista = 1,
  TesteTecnico = 2,
  Aprovado = 3,
}

@Component({
  selector: 'app-detail-candidaturas',
  templateUrl: './detail-candidaturas.component.html',
  styleUrls: ['./detail-candidaturas.component.sass'],
  standalone: false
})
export class DetailCandidaturasComponent  {

  statusEtapas = [
    { label: 'Inscrito', value: StatusCandidatura.Inscrito },
    { label: 'Entrevista', value: StatusCandidatura.Entrevista },
    { label: 'Teste Técnico', value: StatusCandidatura.TesteTecnico },
    { label: 'Aprovado', value: StatusCandidatura.Aprovado },
  ];

  @Input() candidaturaSelecionada: Candidatura | null = null;

  constructor() {}

  get statusIndex(): number {
    return this.candidaturaSelecionada?.status ?? -1;
  }

  get statusLabel(): string {
    return this.statusEtapas.find(e => e.value === this.statusIndex)?.label || 'Desconhecido';
  }
}
