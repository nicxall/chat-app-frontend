import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatApp from './components/ChatApp';
import { Protected, RedirectIfAuthenticated } from './ProtectedRoute/protected';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={ <RedirectIfAuthenticated> <Signin/> </RedirectIfAuthenticated>} 
        />

        <Route
          path='/home' 
          element={<Protected><ChatApp/></Protected>}
        />
        <Route path='/signup'element={ <Signup/>}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;