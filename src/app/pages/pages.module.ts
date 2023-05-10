import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoToolbarModule } from '@po-ui/ng-components';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PoContainerModule, PoFieldModule, PoButtonModule, PoToolbarModule],
})
export class PagesModule {}
