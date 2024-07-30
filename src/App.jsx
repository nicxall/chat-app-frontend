import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatApp from './components/ChatApp';
import Protected from './ProtectedRoute/protected';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signin />} />
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