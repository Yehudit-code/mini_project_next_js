"use client";

import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  birthDate: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "fullName":
        const words = value.trim().split(" ");
        if (words.length < 2) error = "Full name must contain at least two words";
        else if (words.some(w => /^\d/.test(w)))
          error = "No word can start with a number";
        break;

      case "phone":
        if (!/^\d*$/.test(value)) error = "Phone can contain only numbers";
        else if (value.length !== 10) error = "Phone must be 10 digits"; // here is the digit check
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email address";
        break;

      case "birthDate":
        if (value) {
          const today = new Date();
          const birth = new Date(value);
          let age = today.getFullYear() - birth.getFullYear();
          const m = today.getMonth() - birth.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
          if (age < 18) error = "Age must be 18 or older";
        }
        break;

      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries(formData).forEach(([name, value]) =>
      validateField(name, value)
    );
    if (Object.values(errors).every(err => !err)) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors in the form");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Full Name:</label>
        <input
          className={styles.inputField}
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Phone:</label>
        <input
          className={styles.inputField}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.inputField}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Birth Date:</label>
        <input
          className={styles.inputField}
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
        {errors.birthDate && <p className={styles.error}>{errors.birthDate}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
