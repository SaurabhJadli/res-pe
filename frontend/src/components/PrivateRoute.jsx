// PrivateRoute.jsx
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
      const checkAuth = async () => {
        const token = await localStorage.getItem('token');
        
        if (!token) {
          setIsAuthenticated(false);
          navigate('/login')
          return;
        }
  
        try {
          // Verify with backend
          const response = await axios.get('http://localhost:3000/protected', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });          
          setIsAuthenticated(response.ok);
        } catch (err) {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      };
  
      checkAuth();
    }, []);
  
    if (isAuthenticated === null) return <div>Loading...</div>;
    
    return (
        children
    )
  
};

export default PrivateRoute;
