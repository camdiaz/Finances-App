import Saludos from './pages/private/saludos/Saludos';
import Login from './pages/public/login/Login'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    //Asi se configuran variables globales en una aplicación
    <AuthProvider>
      <Login/>
      {/* <Saludos/> */}
    </AuthProvider>
  )
}

export default App
