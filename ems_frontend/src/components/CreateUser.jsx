
import React, { useState } from 'react';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    unitNumber: '',
    unitStation: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your user creation logic here
    //write fetch req to create user on backend 
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Unit Number:</label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Unit Station:</label>
          <input
            type="text"
            name="unitStation"
            value={formData.unitStation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
