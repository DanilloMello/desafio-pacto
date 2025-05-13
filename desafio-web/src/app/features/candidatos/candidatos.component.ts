import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Candidato } from '../../core/modal/candidato';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.sass'],
  standalone: false
})
export class CandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];
  candidatosFiltrados: Candidato[] = [];
  filtro = {
    habilidades: '',
    minExperiencia: null,
    maxExperiencia: null
  };

  candidatoSelecionado: Candidato | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.setUpInicial()
    this.candidatos = [...this.candidatos];
  }

  setUpInicial() {
  this.usuarioService.getCandidatos().subscribe(
    candidatos => {
      if (candidatos) {
        this.candidatos = candidatos;
        this.candidatosFiltrados = [...this.candidatos];
        this.candidatoSelecionado = this.candidatosFiltrados[0] || null;
      }
    },
    error => this.snackBar.open(error.error, 'Fechar', { duration: 5000 })
  );
}

  selecioneCandidato(vaga: Candidato) {
    this.candidatoSelecionado = vaga
  }

  filtrarCandidatos() {
  const habilidadesFiltro = this.filtro.habilidades.toLowerCase();
  const minExp = this.filtro.minExperiencia;
  const maxExp = this.filtro.maxExperiencia;

  this.candidatosFiltrados = this.candidatos.filter(candidato => {
    const temHabilidade =
      habilidadesFiltro === '' || candidato.habilidades?.toLowerCase().includes(habilidadesFiltro);
    const temMinExp = minExp == null || candidato.tempoExperiencia >= minExp;
    const temMaxExp = maxExp == null || candidato.tempoExperiencia <= maxExp;

    return temHabilidade && temMinExp && temMaxExp;
  });

  // atualiza lista e selecionado
  if (this.candidatosFiltrados.length > 0) {
    this.candidatoSelecionado = this.candidatosFiltrados[0];
  } else {
    this.candidatoSelecionado = null;
  }
}

  limparFiltro() {
  this.filtro = { habilidades: '', minExperiencia: null, maxExperiencia: null };
  this.candidatosFiltrados = [...this.candidatos];
  this.candidatoSelecionado = this.candidatosFiltrados[0] || null;
}
}
