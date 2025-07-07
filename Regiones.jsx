import React from "react";

const regionesData = [/*...*/]; // (El contenido completo del array ya está cargado)

const Regiones = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">Emprendimientos en las Regiones del Perú</h1>
      <p className="text-lg text-center text-gray-600 mb-8 max-w-4xl mx-auto">
        Descubre los programas, fondos, ferias y oportunidades que diferentes regiones del país están impulsando para jóvenes emprendedores. Haz clic en cada región para conocer más.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regionesData.map((region, index) => (
          <div key={index} className="rounded-2xl shadow-md p-4 bg-white hover:shadow-xl transition-all border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">{region.nombre}</h2>
            <p className="text-gray-700 mb-2">{region.resumen}</p>
            <a href={region.enlace} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regiones;