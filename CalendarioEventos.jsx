import React from "react";

const eventos = [
  {
    titulo: "Feria Nacional del Emprendimiento Juvenil",
    fecha: "2025-08-12",
    lugar: "Lima - Campo de Marte",
    link: "https://www.gob.pe/produce"
  },
  {
    titulo: "Rueda de Negocios Regional Arequipa",
    fecha: "2025-08-20",
    lugar: "Arequipa",
    link: "https://www.startupperu.pe"
  },
  {
    titulo: "Concurso Capital Semilla ProInnóvate",
    fecha: "2025-08-25",
    lugar: "Virtual",
    link: "https://www.proinnovate.gob.pe"
  },
  {
    titulo: "Taller de Formalización para MYPES",
    fecha: "2025-09-01",
    lugar: "Cusco - Cámara de Comercio",
    link: "https://www.sunat.gob.pe"
  }
];

const CalendarioEventos = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Calendario de Eventos</h2>
      <ul className="space-y-4">
        {eventos.map((evento, idx) => (
          <li key={idx} className="bg-white p-4 rounded-md shadow hover:shadow-lg border border-gray-200">
            <h3 className="text-xl text-indigo-700 font-semibold">{evento.titulo}</h3>
            <p className="text-gray-600">{evento.fecha} — {evento.lugar}</p>
            <a href={evento.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Más información</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarioEventos;