import Saludos from './pages/public/Saludos';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    //Asi se configuran variables globales en una aplicación
    <AuthProvider>
      <Saludos/>
    </AuthProvider>
  )
}

export default App
