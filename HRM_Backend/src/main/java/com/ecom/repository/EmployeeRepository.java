package com.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.model.Employee;
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
