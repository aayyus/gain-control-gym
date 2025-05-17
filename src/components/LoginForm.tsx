
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, rememberMe: checked });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: fullName,
          },
        }
      });
      
      if (error) throw error;
      
      // Create profile record
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { id: data.user.id, full_name: fullName }
          ]);
        
        if (profileError) throw profileError;
      }
      
      toast.success("Account created successfully! You can now log in.");
      setIsSignUp(false);
    } catch (error: any) {
      toast.error(error.message || "Error during sign up");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      
      if (error) throw error;
      
      toast.success("Login successful! Redirecting to dashboard...");
      
      // Wait a bit to show the toast before redirecting
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error: any) {
      toast.error(error.message || "Error during login");
      setIsLoggingIn(false);
    }
  };

  return (
    <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-6">
      {isSignUp && (
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="w-full"
        />
      </div>
      
      {!isSignUp && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="rememberMe"
              checked={formData.rememberMe}
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="font-medium text-gym-primary hover:text-gym-primary/80">
              Forgot password?
            </a>
          </div>
        </div>
      )}
      
      <Button
        type="submit"
        className="w-full bg-gym-primary hover:bg-gym-primary/90 text-white"
        disabled={isLoggingIn}
      >
        {isLoggingIn 
          ? (isSignUp ? "Signing up..." : "Logging in...")
          : (isSignUp ? "Sign up" : "Sign in")
        }
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <button 
              type="button"
              onClick={() => setIsSignUp(false)}
              className="font-medium text-gym-primary hover:text-gym-primary/80"
            >
              Sign in instead
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button 
              type="button"
              onClick={() => setIsSignUp(true)}
              className="font-medium text-gym-primary hover:text-gym-primary/80"
            >
              Sign up now
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
