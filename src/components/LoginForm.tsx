
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, rememberMe: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast.success("Login successful! Redirecting to dashboard...");
      setIsLoggingIn(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      
      <Button
        type="submit"
        className="w-full bg-gym-primary hover:bg-gym-primary/90 text-white"
        disabled={isLoggingIn}
      >
        {isLoggingIn ? "Logging in..." : "Sign in"}
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="#" className="font-medium text-gym-primary hover:text-gym-primary/80">
          Contact us to sign up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
