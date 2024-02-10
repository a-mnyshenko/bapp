import "./index.css";

import React, { useState } from "react";

const FieldEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику обработки отправки формы, например, отправку данных на сервер
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
    </form>
  );
};

export default FieldEmail;
