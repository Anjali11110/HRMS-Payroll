import React, { useState } from "react";
import api from "../api";

const EmployeeForm = ({ fetchEmployees }) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    designation: "",
    basicSalary: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees", employee);
      alert("Employee added successfully!");
      setEmployee({
        name: "",
        email: "",
        designation: "",
        basicSalary: "",
        department: "",
      });
      fetchEmployees(); // Refresh employee list
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Designation:
        <input
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Basic Salary:
        <input
          type="number"
          name="basicSalary"
          value={employee.basicSalary}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Department:
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
