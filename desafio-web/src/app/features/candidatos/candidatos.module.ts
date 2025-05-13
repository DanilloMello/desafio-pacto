import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosComponent } from './candidatos.component';
import { DetailCandidatosComponent } from './detail-candidatos/detail-candidatos.component';



@NgModule({
  declarations: [CandidatosComponent, DetailCandidatosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    CandidatosRoutingModule,
    MatIconModule,
    ReactiveFormsModule,  
    MatInputModule,
    MatFormFieldModule,  
    MatSelectModule,
    FormsModule
  ],
  exports: [CandidatosComponent]
})
export class CandidatosModule { }
