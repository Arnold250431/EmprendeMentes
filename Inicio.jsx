import React from "react";

const Inicio = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Bienvenido a Empredementes</h1>
      <p className="text-gray-700 mb-4">Tu espacio para descubrir oportunidades, programas y herramientas que impulsarán tus ideas de negocio.</p>
      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        <li><strong>Formalización:</strong> Aprende a legalizar tu negocio en SUNARP, obtener RUC, y registrarte en PRODUCE. <a href="https://www.gob.pe/produce" target="_blank" className="text-blue-600 underline">Ver más</a></li>
        <li><strong>Programas de pasantías:</strong> Accede a programas como “Jóvenes Productivos” del MTPE. <a href="https://www.trabajo.gob.pe" target="_blank" className="text-blue-600 underline">Ver más</a></li>
        <li><strong>Financiamiento:</strong> Participa en fondos de ProInnóvate, Innóvate Perú, y Startup Perú. <a href="https://www.startupperu.pe" target="_blank" className="text-blue-600 underline">Ver más</a></li>
      </ul>
    </div>
  );
};

export default Inicio;