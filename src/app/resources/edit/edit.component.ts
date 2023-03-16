import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from '../resource';
import { ResourcesService } from '../resources.service';

 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  resourceForm: Resource = {
    id: 0,
    name: '',
    description: '',
    type: '',
  };
  TypeList = ['option1', 'option2', 'option3'];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private resourceService: ResourcesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.resourceService.getById(id).subscribe((data) => {
      this.resourceForm = data;
    });
  }
 
  update() {
    this.resourceService.update(this.resourceForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/resources/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
