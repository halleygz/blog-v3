import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const signup = async (inputs) => {
    const { fullName, username, email, password, comfirmPassword } = inputs;
    const success = handleUserInput({
      fullName,
      username,
      email,
      password,
      comfirmPassword,
    });

    // Stop execution if validation fails
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
        }),
      });

      if (!res) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.error) {
        console.error("Error:", data.error);
        toast.error(data.error);
        return;
      }

      localStorage.setItem("blog-user", JSON.stringify(data));
      setAuthUser(data);
      console.log("Signup successful:", data);
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleUserInput({
  fullName,
  username,
  password,
  comfirmPassword,
  email,
}) {
  if (!fullName || !username || !email || !password || !comfirmPassword) {
    toast.error("Please fill all required fields");
    return false;
  }

  if (password !== comfirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
