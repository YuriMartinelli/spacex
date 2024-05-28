function Button() {
  return (
    <div className="flex justify-between space-x-4 mt-8">
      <button
        type="button"
        className="w-1/2 bg-violet-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
      >
        Cancelar
      </button>
      <button
        type="submit"
        className="w-1/2 bg-violet-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Button;
