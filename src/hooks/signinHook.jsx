import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Hashpassword } from '../services/hash'

const useSignin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await Hashpassword(password);
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password: hashedPassword,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      if (response) {
        navigate('/home');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  };
};

export default useSignin;
