import Button from "../Button.js";
import Header from "../Header.js";
import React, { useState } from "react";

export default function Cadastrar() {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <Header>Cadastro de endereço</Header>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Rua</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Cidade</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Estado</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">CEP</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">País</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <Button></Button>
      </form>
    </div>
  );
}
