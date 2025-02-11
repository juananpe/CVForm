import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, Briefcase, GraduationCap, Languages, Award } from 'lucide-react';

const CVForm = () => {
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    
    // Experiencia laboral
    experiencias: [{
      empresa: '',
      puesto: '',
      fechaInicio: '',
      fechaFin: '',
      descripcion: ''
    }],
    
    // Educación
    educacion: [{
      institucion: '',
      titulo: '',
      fechaInicio: '',
      fechaFin: ''
    }],
    
    // Habilidades
    habilidades: '',
    
    // Idiomas
    idiomas: [{
      idioma: '',
      nivel: ''
    }]
  });

  const handleChange = (e, section, index) => {
    if (section) {
      const newData = { ...formData };
      newData[section][index][e.target.name] = e.target.value;
      setFormData(newData);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const addItem = (section) => {
    const newData = { ...formData };
    if (section === 'experiencias') {
      newData.experiencias.push({
        empresa: '',
        puesto: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: ''
      });
    } else if (section === 'educacion') {
      newData.educacion.push({
        institucion: '',
        titulo: '',
        fechaInicio: '',
        fechaFin: ''
      });
    } else if (section === 'idiomas') {
      newData.idiomas.push({
        idioma: '',
        nivel: ''
      });
    }
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log(formData);
    setShowAlert(true);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Datos Personales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className="border rounded p-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2"
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={handleChange}
                className="border rounded p-2"
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experiencia Laboral
            </CardTitle>
          </CardHeader>
          <CardContent>
            {formData.experiencias.map((exp, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    value={exp.empresa}
                    onChange={(e) => handleChange(e, 'experiencias', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="text"
                    name="puesto"
                    placeholder="Puesto"
                    value={exp.puesto}
                    onChange={(e) => handleChange(e, 'experiencias', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="date"
                    name="fechaInicio"
                    placeholder="Fecha de inicio"
                    value={exp.fechaInicio}
                    onChange={(e) => handleChange(e, 'experiencias', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="date"
                    name="fechaFin"
                    placeholder="Fecha de fin"
                    value={exp.fechaFin}
                    onChange={(e) => handleChange(e, 'experiencias', index)}
                    className="border rounded p-2"
                  />
                  <textarea
                    name="descripcion"
                    placeholder="Descripción de responsabilidades"
                    value={exp.descripcion}
                    onChange={(e) => handleChange(e, 'experiencias', index)}
                    className="border rounded p-2 col-span-2"
                    rows="3"
                    required
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItem('experiencias')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Añadir Experiencia
            </button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Educación
            </CardTitle>
          </CardHeader>
          <CardContent>
            {formData.educacion.map((edu, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="institucion"
                    placeholder="Institución"
                    value={edu.institucion}
                    onChange={(e) => handleChange(e, 'educacion', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="text"
                    name="titulo"
                    placeholder="Título obtenido"
                    value={edu.titulo}
                    onChange={(e) => handleChange(e, 'educacion', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="date"
                    name="fechaInicio"
                    placeholder="Fecha de inicio"
                    value={edu.fechaInicio}
                    onChange={(e) => handleChange(e, 'educacion', index)}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="date"
                    name="fechaFin"
                    placeholder="Fecha de fin"
                    value={edu.fechaFin}
                    onChange={(e) => handleChange(e, 'educacion', index)}
                    className="border rounded p-2"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItem('educacion')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Añadir Educación
            </button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Habilidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              name="habilidades"
              placeholder="Lista tus habilidades principales (separadas por comas)"
              value={formData.habilidades}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="3"
              required
            />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="w-5 h-5" />
              Idiomas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {formData.idiomas.map((idioma, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="idioma"
                    placeholder="Idioma"
                    value={idioma.idioma}
                    onChange={(e) => handleChange(e, 'idiomas', index)}
                    className="border rounded p-2"
                    required
                  />
                  <select
                    name="nivel"
                    value={idioma.nivel}
                    onChange={(e) => handleChange(e, 'idiomas', index)}
                    className="border rounded p-2"
                    required
                  >
                    <option value="">Selecciona el nivel</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Nativo">Nativo</option>
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItem('idiomas')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Añadir Idioma
            </button>
          </CardContent>
        </Card>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Enviar CV
        </button>
      </form>

      {showAlert && (
        <Alert className="mt-4">
          <AlertDescription>
            ¡Formulario enviado con éxito! Los datos han sido guardados.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default CVForm;
