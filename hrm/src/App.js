import logo from './logo.svg';
import './App.css';
import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import SalarySlipForm from "./components/SalarySlipForm";
import SalarySlipView from "./components/SalarySlipView";

function App() {
  return (
    <div>
      <h1>HRMS Payroll System</h1>
      <EmployeeForm />
      <EmployeeTable />
      <SalarySlipForm />
      <SalarySlipView />
    </div>
  );
}

export default App;
