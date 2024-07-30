import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
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
    email,
    setEmail,
    handleSubmit,
  };
};

export default useSignup;
