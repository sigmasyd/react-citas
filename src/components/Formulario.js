import React from 'react'

export const Formulario = () => {
  return (
    <>
     <h2>Crear Cita</h2>
     <form>
       <label htmlFor="">Nombre Mascota</label>
       <input 
        type="text" 
        name="mascota" 
        className="u-full-width" 
        placeholder="Nombre Mascota"
        />
       <label htmlFor="">Nombre Dueño</label>
       <input 
        type="text" 
        name="propietario" 
        className="u-full-width" 
        placeholder="Nombre del Dueño de la Mascota"
      />
      <label htmlFor="">Fecha</label>
      <input 
        type="date" 
        name="fecha" 
        className="u-full-width" 
      />
      <label htmlFor="">Hora</label>
      <input 
        type="time" 
        name="hora" 
        className="u-full-width" 
      />
      <label htmlFor="">Sintomas</label>
      <textarea name="sintomas" className="u-full-width"></textarea>
      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
     </form>
    </>
  )
}
