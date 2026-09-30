import './App.css'

function App() {
  const alumnos = [
    { id: 1, nombre: 'Alison Saban', edad: 20, carrera: 'Desarrollo de Software' },
    { id: 2, nombre: 'Jimy Crisostomo', edad: 24, carrera: 'Diseño Grafico' },
    { id: 3, nombre: 'luis pedro', edad: 19, carrera: 'teologia' }
  ]

  return (
    <div className="app">
      <h1>Listado de Alumnos</h1>

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