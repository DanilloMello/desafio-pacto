import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailVagaComponent } from './detail-vaga/detail-vaga.component';
import { FormVagaComponent } from './form-vaga/form-vaga.component';
import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas.component';

@NgModule({
  declarations: [
    VagasComponent,
    DetailVagaComponent,
    FormVagaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    VagasRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule 
],
  exports: [VagasComponent]
})
export class VagasModule { }
