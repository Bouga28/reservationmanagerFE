import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
