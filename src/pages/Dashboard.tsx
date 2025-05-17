
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/dashboard/StatCard";
import MembersTable from "@/components/dashboard/MembersTable";
import MembershipTypesCard from "@/components/dashboard/MembershipTypesCard";
import { UsersIcon, CreditCardIcon, CalendarIcon, TrendingUpIcon } from "lucide-react";

const Dashboard = () => {
  const { profile } = useAuth();
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 px-4 py-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {greeting}, {profile?.full_name || 'User'}
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your gym today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Members" 
              value="115" 
              icon={<UsersIcon className="h-5 w-5 text-gym-primary" />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard 
              title="Active Memberships" 
              value="95" 
              icon={<CreditCardIcon className="h-5 w-5 text-gym-primary" />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard 
              title="Check-ins Today" 
              value="28" 
              icon={<CalendarIcon className="h-5 w-5 text-gym-primary" />}
              trend={{ value: 5, isPositive: true }}
            />
            <StatCard 
              title="Revenue This Month" 
              value="$5,230" 
              icon={<TrendingUpIcon className="h-5 w-5 text-gym-primary" />}
              trend={{ value: 3, isPositive: false }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <MembersTable />
              </div>
            </div>
            <div>
              <MembershipTypesCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
