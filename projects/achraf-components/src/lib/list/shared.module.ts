import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FilterPipe } from './filter.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [FilterPipe],
  exports: [CommonModule, FilterPipe, MaterialModule, FormsModule]
})
export class SharedModule {}
