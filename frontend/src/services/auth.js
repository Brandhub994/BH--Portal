// Login function
export const LoginAPI = async (email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Include status code and detailed message if available
        throw new Error(data.message || `Login failed with status ${response.status}`);
      }
  
      return data;
    } catch (error) {
      console.error('Login error:', error); // Log error for debugging purposes
      throw error;
    }
  };
  
  // Signup function
  export const SignupAPI = async (name, email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || `Signup failed with status ${response.status}`);
      }
  
      localStorage.setItem('email', email);
      return data;
    } catch (error) {
      console.error('Signup error:', error); 
      throw error;
    }
  };
  