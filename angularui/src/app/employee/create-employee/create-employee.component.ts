import { Component } from '@angular/core';
import { Employee } from "../../services/api.services/models/employee";
import { EmployeecontroService } from "../../services/api.services/services/employeecontro.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(); // Ensure Employee class is correctly imported

  constructor(private employeeService: EmployeecontroService, private router: Router) { }

  onSubmit() {
    this.employeeService.addemployee({ body: this.employee }).subscribe(
      (data) => {
        console.log("Employee created successfully", data);
        this.router.navigate(['/employees']); // Redirect after successful creation
      },
      (error) => {
        console.error("Error creating employee", error);
      }
    );
  }
}
