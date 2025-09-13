import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashboardOverview from "@/components/DashboardOverview";
import ExpenseChart from "@/components/ExpenseChart";
import RecentTransactions from "@/components/RecentTransactions";
import BudgetTracker from "@/components/BudgetTracker";
import GoalTracker from "@/components/GoalTracker";
import AddExpense from "@/components/AddExpense";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <DashboardOverview />
            <ExpenseChart />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <RecentTransactions />
              </div>
              <div className="space-y-6">
                <BudgetTracker />
                <GoalTracker />
              </div>
            </div>
          </div>
        );
      case "expenses":
        return <AddExpense />;
      case "analytics":
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <ExpenseChart />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BudgetTracker />
              <GoalTracker />
            </div>
          </div>
        );
      case "goals":
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Savings Goals</h2>
            <GoalTracker />
          </div>
        );
      case "settings":
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;
