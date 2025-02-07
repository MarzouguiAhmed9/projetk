import { Component, OnInit } from '@angular/core';
import { Employee } from "../../services/api.services/models/employee";
import { EmployeecontroService } from "../../services/api.services/services/employeecontro.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeecontroService, private router: Router) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (response: any) => {
        if (response instanceof Blob) {
          // Convert Blob to JSON
          response.text().then(text => {
            this.employees = JSON.parse(text); // Assign parsed JSON
            console.log("✅ Employees after parsing:", this.employees);
          });
        } else {
          this.employees = response; // Normal case
        }
      },
      error: (error) => console.error("❌ API Error:", error)
    });
  }


}
