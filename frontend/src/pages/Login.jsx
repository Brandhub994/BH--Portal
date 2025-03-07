import  { useState } from 'react';
import bgImage from '../assets/bg.png';
import { LoginAPI } from '../services/auth';
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // State for email, password, and password visibility
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      await LoginAPI(email, password)
      toast.success("Login Successful")
      setEmail('');
      setPassword('');
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      
      
    } catch {
      toast.error("Invalid email or password!");
      // On success, clear the form fields
      setEmail('');
      setPassword('');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
    className="flex items-center bg-blue-400 justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className="absolute top-5 left-10">
        <h1 className="text-2xl font-bold text-[white]">BrandHub</h1>
      </div>

      <div className="w-full max-w-md p-10 space-y-8 bg-white/80 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-extrabold text-center text-[#005a9c]">Welcome Back!</h2>
        <p className="text-sm text-center text-gray-500">Please sign in to your account</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-gray-700 bg-[#e2e8f0] border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1b4b6d] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Change input type based on state
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-1 text-gray-700 bg-[#e2e8f0] border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#1b4b6d] focus:outline-none"
                placeholder="Enter your password"
              />
              {/* Eye icon to toggle visibility */}
              <span 
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-lg top-7 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-white bg-[#005a9c] rounded-lg hover:bg-[#1b4b6d] focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Login
          </button>
        </form> 

        <p className="text-sm text-center text-gray-600">
          Don’t have an account? <a href="/signup" className="text-indigo-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
