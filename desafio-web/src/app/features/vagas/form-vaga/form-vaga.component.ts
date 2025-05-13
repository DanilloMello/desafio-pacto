import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vaga } from '../../../core/modal/vaga';

@Component({
  selector: 'app-form-vaga',
  templateUrl: './form-vaga.component.html',
  styleUrl: './form-vaga.component.sass',
  standalone: false
})
export class FormVagaComponent implements OnChanges{

  vagaForm: FormGroup;
  isNewForm: boolean = false;

  @Output() vagaFormEmitter = new EventEmitter<Vaga>();
  @Input() errorMessage: string | null = null;
  @Input() vaga: Vaga | null = null;

  constructor(private fb: FormBuilder) {
    this.vagaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vaga']) {
      if (this.vaga) {
        this.vagaForm.patchValue(this.vaga);
      } else {
        this.vagaForm.reset();
      }
    }
  }

  onSubmit(){
    if (this.vagaForm.valid) {
      const vaga: Vaga = {...this.vaga, ...this.vagaForm.value};
      this.vagaFormEmitter.emit(vaga);
    }
  }
}
