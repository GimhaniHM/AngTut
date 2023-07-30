import { Component, OnInit } from '@angular/core';
import {RecordsService} from "../records.service"  //service is imported

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit{
  emp1_info: string[]=[];
  emp2_info: string[]=[];
  emp3_info: string[]=[];

  getempInfo1(){
    this.emp1_info = this.rservice.emp1_info;
  }
  getempInfo2(){
    this.emp2_info = this.rservice.emp2_info;
  }
  getempInfo3(){
    this.emp3_info = this.rservice.emp3_info;
  }

  constructor(private rservice:RecordsService) {}

  ngOnInit(): void {}

}
