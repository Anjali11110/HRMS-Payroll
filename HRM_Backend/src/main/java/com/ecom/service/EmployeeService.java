package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.model.Employee;
import com.ecom.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {
	 @Autowired
	    private EmployeeRepository employeeRepository;

	    public Employee saveEmployee(Employee employee) {
	        return employeeRepository.save(employee);
	    }

	    public List<Employee> getAllEmployees() {
	        return employeeRepository.findAll();
	    }

	    public Employee updateEmployee(Long id, Employee employee) {
	        Employee existing = employeeRepository.findById(id).orElseThrow();
	        existing.setName(employee.getName());
	        existing.setEmail(employee.getEmail());
	        existing.setDesignation(employee.getDesignation());
	        existing.setBasicSalary(employee.getBasicSalary());
	        existing.setDepartment(employee.getDepartment());
	        return employeeRepository.save(existing);
	    }

	    public void deleteEmployee(Long id) {
	        employeeRepository.deleteById(id);
	    }
}
