package com.example.demo.conrtoller;

import com.example.demo.model.Employee;
import com.example.demo.repository.Employeerepo;
import jakarta.persistence.Entity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular app


public class employeecontro {
    private Employeerepo r;

    public employeecontro(Employeerepo employeerepo) {
        this.r = employeerepo;
    }

    @PostMapping("/employees")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee addemployee(@RequestBody Employee employee) {
        return r.save(employee);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees() {
        List<Employee> employees = r.findAll();
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) throws ResourceNotFoundException {
        Employee employee = r.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found with id:"+id));
        return ResponseEntity.ok(employee);

    }

//    @PostMapping("/employees/{id}")
//    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
//        Employee employee = r.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id :" + id));
//         employee.setName(employeeDetails.getName());
//         employee.setPhone(employeeDetails.getPhone());
//         employee.setEmail(employeeDetails.getEmail());
//         employee.setDepartement(employeeDetails.getDepartement());
//        final Employee updatedEmployee = r.save(employee);
//        return ResponseEntity.ok(updatedEmployee);
//
//    }
    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Integer employeeId)
            throws ResourceNotFoundException {
        Employee employee = r.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

        r.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}
