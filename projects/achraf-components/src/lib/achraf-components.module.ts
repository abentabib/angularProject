
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AchrafComponentsComponent } from './achraf-components.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from './list/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [AchrafComponentsComponent, ListComponent],
  exports: [AchrafComponentsComponent, ListComponent]
})
export class AchrafComponentsModule { }
