package com.ecom.controller;

import org.springframework.web.bind.annotation.*;

import com.ecom.model.Employee;
import com.ecom.service.EmployeeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
	 @Autowired
	    private EmployeeService employeeService;

	    @PostMapping
	    public Employee addEmployee(@RequestBody Employee employee) {
	        return employeeService.saveEmployee(employee);
	    }

	    @GetMapping
	    public List<Employee> getAllEmployees() {
	        return employeeService.getAllEmployees();
	    }

	    @PutMapping("/{id}")
	    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
	        return employeeService.updateEmployee(id, employee);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteEmployee(@PathVariable Long id) {
	        employeeService.deleteEmployee(id);
	    }
}
