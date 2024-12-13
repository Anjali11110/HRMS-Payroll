import React, { useState } from "react";
import api from "../api";

const SalarySlipView = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [salarySlip, setSalarySlip] = useState(null);

  const handleViewSalarySlip = async (e) => {
    e.preventDefault();

    if (!employeeId) {
      alert("Please enter a valid employee ID.");
      return;
    }

    try {
      const response = await api.get(`/employees/${employeeId}/salary-slip`);
      setSalarySlip(response.data);
    } catch (error) {
      console.error("Error fetching salary slip:", error);
      alert("Failed to fetch salary slip. Please ensure the Employee ID is valid.");
    }
  };

  return (
    <div>
      <h2>View Salary Slip</h2>
      <form onSubmit={handleViewSalarySlip}>
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
        <button type="submit">View Salary Slip</button>
      </form>

      {salarySlip && (
        <div className="salary-slip">
          <h3>Salary Slip Details</h3>
          <p><strong>Employee ID:</strong> {salarySlip.employeeId}</p>
          <p><strong>PF Deduction:</strong> ₹{salarySlip.pfDeduction}</p>
          <p><strong>Professional Tax:</strong> ₹{salarySlip.professionalTax}</p>
          <p><strong>Net Salary:</strong> ₹{salarySlip.netSalary}</p>
        </div>
      )}
    </div>
  );
};

export default SalarySlipView;
