
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center mb-6">
                <span className="text-2xl font-bold text-gym-primary">Gym</span>
                <span className="text-2xl font-bold text-gym-secondary">Flex</span>
              </Link>
              <h1 className="text-3xl font-bold text-gym-secondary">Sign in to your account</h1>
              <p className="mt-2 text-gray-600">
                Access your gym management dashboard
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <LoginForm />
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                By signing in, you agree to our{" "}
                <a href="#" className="font-medium text-gym-primary hover:text-gym-primary/80">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-gym-primary hover:text-gym-primary/80">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
