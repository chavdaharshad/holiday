import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormControl } from '@angular/forms';
import { finalize } from 'rxjs';
import { CrudService } from 'src/app/core';
import { Task } from 'src/app/core/model/task';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
festiForm !: FormGroup;
  isLoading = false;
  contentArr: Task[] = [];
 
  constructor(private crudservice: CrudService,private formBuilder: FormBuilder) {
   }
   private createForm() {
    this. festiForm = new FormGroup({
      festivalName : new FormControl(''),
      date: new FormControl(''),
      description : new FormControl('')
    })
  }
  ngOnInit(): void {
    this.createForm();
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
    this.crudservice.getData(this.festiForm.value).subscribe((res:any) => {
      console.log('res: ', res);
      this.contentArr = res.list
    }, err => {
      alert("unble");
    });
  } 
  
  addfestival() {
    this.isLoading = true;
    console.log(this.festiForm.value)
    this.crudservice.addData(this.festiForm.value).subscribe(res => {
      this.closePopup();
  }, err => {
    alert(err);
  })
  }
  editfestival() {
    this.crudservice.editData(this.festiForm.value).subscribe(res => {
      console.log(res)
      this.closePopup();
    })
  }
}
