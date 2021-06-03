import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
tasks:any=[];
taskform: FormGroup;
closeResult:string;
detail=""
title=""
status=""
statusdata=["In-Process","Completed","Bug"]

  constructor(private api:ApiService, 
    private formBuilder: FormBuilder,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
this.getData();
    
    this.taskform=this.formBuilder.group({
      title : [null, Validators.required],
      statusct : [null, Validators.required],
      discription : [null, Validators.required],
    })
  }
getData(){
  const result=this.api.getAllData().toPromise();
  result.then((res)=>{
this.tasks=res;
  })
}

  updateCredDialog(up):void{
    // console.log(data);
    this.modalService.open(up, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log("unkown error")
    });
  }

  submitCredUpdate(){
    console.log(this.taskform)
    let formData={"title":this.taskform.value["title"],"status":this.taskform.value["statusct"],"description":this.taskform.value['discription']}
this.api.addDetails(formData);
this.getData();
  }
}
