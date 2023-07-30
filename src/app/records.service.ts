import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  //store details of 3 employees using string[] array
  emp1_info: string[] = ["John Deo","Em101","john@emp.net"];
  emp2_info: string[] = ["Robert Joe","Em111","robert@emp.net"];
  emp3_info: string[] = ["Jenny Deker","Em150","jenny@emp.net"];

  //methods to return data
  getEmpInfo1(): string[]{
    return this.emp1_info;
  }
  getEmpInfo2(): string[]{
    return this.emp2_info;
  }
  getEmpInfo3(): string[]{
    return this.emp3_info;
  }


  constructor() { }
}
