import { useState } from 'react'
import './App.css'

function App() {
  const [alumnos, setAlumnos] = useState([])

  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [carrera, setCarrera] = useState('')

  const agregarAlumno = (e) => {
    e.preventDefault()

    const nuevoAlumno = {
      id: alumnos.length + 1,
      nombre: nombre,
      edad: edad,
      carrera: carrera
    }

    setAlumnos([...alumnos, nuevoAlumno])

    setNombre('')
    setEdad('')
    setCarrera('')
  }

  return (
    <div className="app">
      <h1>Listado de Alumnos</h1>

      <form onSubmit={agregarAlumno}>
        <h2>Agregar alumno</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Carrera:</label>
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            required
          />
        </div>

        <button type="submit">Agregar alumno</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
          </tr>
        </thead>

        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App