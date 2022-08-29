import { Component } from '@angular/core';
import { CrudService } from 'src/app/core';
import { Task } from 'src/app/core/model/task';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  contentObj: Task = new Task();
  contentArr: Task[] = [];

  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.contentObj = new Task();
    this.getData();
  }
  displayStyle = "none";
  addDisplayStyle = "none";
  deleteDisplayStyle = "none";
  editDisplayStyle = "none";

  addPopup() {
    this.addDisplayStyle = "block";
  }

  editPopup() {
    this.editDisplayStyle = "block";
  }
  
  deletePopup() {
    this.deleteDisplayStyle = "block";
  }
  
  closePopup() {
    this.addDisplayStyle = "none";
    this. deleteDisplayStyle = "none";
    this.editDisplayStyle = "none";
  }
  getData() {
    this.crudservice.getData(this.contentObj).subscribe(res => {
      this.contentArr = res
    });
  }

  addData() {
    console.log("test");
    this.crudservice.addData(this.contentObj).subscribe(res => {
        this.ngOnInit();
    })
  }
}
