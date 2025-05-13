
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LayoutComponent } from './layout.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/components/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderMenuComponent,
    LeftSideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
