import { useState } from "react";
import bgImage from "../assets/bg.png";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SignupAPI } from "../services/auth";

export default function Signup() {
  // State for form data and error handling
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Call the SignupAPI and get the success message
      await SignupAPI(name, email, password);
  
      // Show success message
      toast.success("Signup Successful!");
            
      setTimeout(() => {
        navigate("/");
      }, 2000);
  
    } catch (err) {
      // Show the error message dynamically from the backend or a default one
      toast.error(err.message || "Something went wrong!");

  
      // Clear the form fields on error (optional, if you want to reset the form)
      setName("");
      setEmail("");
      setPassword("");
    }
  
    setLoading(false);
  };
  
  

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-5 left-10">
        <h1 className="text-2xl font-bold text-white">UZTalks</h1>
      </div>

      <div className="w-full max-w-md p-10 space-y-3 bg-white/80 shadow-lg rounded-2xl">
        <h2 className="text-3xl font-extrabold text-center text-[#005a9c]">
          Create an Account
        </h2>
        <p className="text-sm text-center text-[#4a5568]">
          Join us and start your journey
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-[#2d3748]"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-[#2d3748] bg-[#e2e8f0] border border-[#cbd5e0] rounded-lg focus:ring-2 focus:ring-[#005a9c] focus:outline-none"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-[#2d3748]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-[#2d3748] bg-[#e2e8f0] border border-[#cbd5e0] rounded-lg focus:ring-2 focus:ring-[#005a9c] focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label
              className="block text-sm font-medium text-[#2d3748]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-[#2d3748] bg-[#e2e8f0] border border-[#cbd5e0] rounded-lg focus:ring-2 focus:ring-[#005a9c] focus:outline-none pr-10" // Added padding-right for icon
              placeholder="Enter your password"
              required
            />

            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 text-lg top-12 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-3 text-lg font-medium text-white bg-[#005a9c] rounded-lg hover:bg-[#1b4b6d] focus:outline-none focus:ring-4 focus:ring-[#1b4b6d] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-[#4a5568]">
          Already have an account?{" "}
          <a href="/" className="text-[#005a9c] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
