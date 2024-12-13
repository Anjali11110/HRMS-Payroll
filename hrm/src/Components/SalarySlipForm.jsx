import React, { useState } from "react";
import api from "../api";

const SalarySlipForm = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [salarySlip, setSalarySlip] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/employees/${employeeId}/salary-slip`);
      setSalarySlip(response.data);
    } catch (error) {
      console.error("Error generating salary slip:", error);
    }
  };

  return (
    <div>
      <h2>Generate Salary Slip</h2>
      <form onSubmit={handleGenerate}>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            required
          />
        </label>
        <button type="submit">Generate</button>
      </form>

      {salarySlip && (
        <div className="salary-slip">
          <h3>Salary Slip</h3>
          <p>Employee ID: {salarySlip.employeeId}</p>
          <p>PF Deduction: ₹{salarySlip.pfDeduction}</p>
          <p>Professional Tax: ₹{salarySlip.professionalTax}</p>
          <p>Net Salary: ₹{salarySlip.netSalary}</p>
        </div>
      )}
    </div>
  );
};

export default SalarySlipForm;
