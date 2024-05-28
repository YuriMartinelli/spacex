import Button from "../Button.js";
import Header from "../Header.js";
import React, { useState } from "react";

export default function Editar({ addressData }) {
  const [editMode, setEditMode] = useState(false);
  //AQUI EU USARIA O OBJETO QUE JA EXISTE DE ENDEREÇO, COMO É SÓ O FRONT, NÃO TENHO
  //MAS SERIA ALGO COMO: street: adreessData.street
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

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
    setEditMode(false);
    // Adicione a lógica aqui para enviar os dados editados para o servidor
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <Header>Editar Informações</Header>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!editMode}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            readOnly={!editMode}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Rua</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            readOnly={!editMode}
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
            readOnly={!editMode}
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
            readOnly={!editMode}
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
            readOnly={!editMode}
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
            readOnly={!editMode}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>
        {!editMode ? (
          <Button onClick={handleEdit}>Editar</Button>
        ) : (
          <>
            <Button type="submit">Salvar Alterações</Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
          </>
        )}
      </form>
    </div>
  );
}
