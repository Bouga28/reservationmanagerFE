import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../resource';
import {ResourcesService} from '../resources.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  resourceForm: Resource = {
    id: 0,
    name: '',
    description: '',
    type: '',
  };
 
  constructor(private resourceService:ResourcesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.resourceService.create(this.resourceForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/resources/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
