import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

function AuthJwt() {
    const [userId, setUserId] = useState(null);
  
    useEffect(() => {
      const tokenGet = localStorage.getItem('token');
      if (tokenGet) {
        try {
          const decode = jwtDecode(tokenGet);
          setUserId(decode.id);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    }, []);
  
    return userId;
  }
  
export default AuthJwt;