import { Component } from '@angular/core';
import { Employee } from "../../services/api.services/models/employee";
import { EmployeecontroService } from "../../services/api.services/services/employeecontro.service";
import { ActivatedRoute, Router } from "@angular/router";
import {GetEmployeeById$Params} from "../../services/api.services/fn/employeecontro/get-employee-by-id";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  employee: Employee = new Employee();
  id: number | undefined;

  constructor(
    private employeecontroService: EmployeecontroService,
    private router: Router,
    private route: ActivatedRoute // ✅ Correctly placed parameter
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id'); // Get route parameter
    this.id = Number(idParam); // Convert to number
    const params: GetEmployeeById$Params = {id: this.id};
    this.employeecontroService.getEmployeeById(params).subscribe({
      next: (response) => {
        if (response instanceof Blob) {
          // Convert Blob to JSON
          response.text().then(text => {
            this.employee = JSON.parse(text); // Parse JSON from Blob
            console.log("✅ Parsed Employee Data:", this.employee);
          });
        } else {
          this.employee = response; // Assign normally if not a Blob
        }
      },
      error: (error) => console.error("❌ API Error:", error)
    });
  }



  onSubmit() {
    // Implement update logic here
  }
}
