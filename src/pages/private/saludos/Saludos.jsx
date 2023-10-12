import React from 'react'
import Button from '../../../components/button/Button'
import { AuthContext} from '../../../context/AuthContext';

function Saludos() {
  const { saludo, setSaludo,momentoDia, setMomentoDia } = React.useContext(AuthContext)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <h1>{ saludo }</h1>
      <h1>{ momentoDia }</h1>

      < Button />
      <button
        style={{ marginTop: "30px" }}
        onClick={() => setSaludo("Hola, te saludo desde la vista")}
      >
        Saludo desde la vista "./Saludo"
      </button>

      <button
        style={{ marginTop: "30px" }}
        onClick={() => setMomentoDia("Hola, buenos dias")}
      >
        Momento dia
      </button>
    </div>
  )
}

export default Saludos