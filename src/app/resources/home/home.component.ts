import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { PaginatedResource } from '../paginated-resource';
import { Resource } from '../resource';
import { ResourcesService } from '../resources.service';
import { ResourcespaginationService } from '../resourcespagination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    resources!:PaginatedResource;
    constructor(public service: ResourcespaginationService) { }
  
    ngOnInit() {
      this.service.getResources().then(resources=>{
        console.log('data = ', resources.data);
        this.resources = resources;});
    }
  
    prevPage() {
      this.service.getResourcesAtUrl(this.resources.prev_page_url).then(resources=>this.resources = resources);
    }
  
    nextPage() {
      this.service.getResourcesAtUrl(this.resources.next_page_url).then(resources=>this.resources = resources);
    }
  










  }
