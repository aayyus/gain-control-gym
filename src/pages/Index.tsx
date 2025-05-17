
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gym-secondary to-gym-dark text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Simplified Gym Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Streamline your operations, enhance member experience, and grow your fitness business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gym-primary hover:bg-gym-primary/90 text-white">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Powerful Features for Your Gym
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="h-14 w-14 rounded-full bg-gym-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gym-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Member Management</h3>
                <p className="text-gray-600 text-center">
                  Easily manage memberships, track attendance, and handle billing in one place.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="h-14 w-14 rounded-full bg-gym-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gym-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Class Scheduling</h3>
                <p className="text-gray-600 text-center">
                  Create and manage class schedules with automated notifications and reminders.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="h-14 w-14 rounded-full bg-gym-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gym-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Performance Analytics</h3>
                <p className="text-gray-600 text-center">
                  Track key metrics and generate insightful reports to optimize your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gym-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Gym Management?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of gym owners who've simplified their operations with GymFlex.
            </p>
            <Button asChild size="lg" className="bg-white text-gym-primary hover:bg-gray-100">
              <Link to="/login">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
