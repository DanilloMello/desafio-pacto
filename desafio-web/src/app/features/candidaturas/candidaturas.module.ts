import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { CandidaturasRoutingModule } from './candidaturas-routing.module';
import { CandidaturasComponent } from './candidaturas.component';
import { DetailCandidaturasComponent } from './detail-candidaturas/detail-candidaturas.component';



@NgModule({
  declarations: [CandidaturasComponent, DetailCandidaturasComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    CandidaturasRoutingModule,
    MatIconModule,
    MatStepperModule 
  ],
  exports: [CandidaturasComponent]
})
export class CandidaturasModule { }
