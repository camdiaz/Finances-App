import React from 'react'
import "./style/button.css"
import { AuthContext} from '../../context/AuthContext';

function Button() {
  const { setSaludo } = React.useContext(AuthContext)
  return (
    <button
    style={{ marginTop: "30px" }}
    onClick={() => setSaludo("Hola, te saludo desde el componente")}
    >
      Saludo desde un componente
    </button>
  )
}

export default Button