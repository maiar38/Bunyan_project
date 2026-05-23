import React, { useState } from "react";

function FormDashboard({ setDraftPage, page }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const updated = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updated);

    const hasValue = Object.values(updated).some(
      (val) => val.trim() !== ""
    );

    if (hasValue) {
      setDraftPage(page); 
    } else {
      setDraftPage(""); 
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default FormDashboard;