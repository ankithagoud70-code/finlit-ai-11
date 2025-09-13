import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, BookOpen, Car, Home, Plus } from "lucide-react";

const GoalTracker = () => {
  const savingsGoals = [
    {
      id: 1,
      title: "Emergency Fund",
      target: 5000,
      current: 3200,
      deadline: "Dec 2024",
      icon: Target,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Textbooks",
      target: 800,
      current: 650,
      deadline: "Aug 2024",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "Car Savings",
      target: 12000,
      current: 4500,
      deadline: "Jun 2025",
      icon: Car,
      color: "text-green-600"
    },
    {
      id: 4,
      title: "Study Abroad",
      target: 8000,
      current: 2800,
      deadline: "Jan 2025",
      icon: Home,
      color: "text-purple-600"
    }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">Savings Goals</CardTitle>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-1" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {savingsGoals.map((goal) => {
            const Icon = goal.icon;
            const percentage = (goal.current / goal.target) * 100;
            const remaining = goal.target - goal.current;
            
            return (
              <div key={goal.id} className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-secondary/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className={`h-5 w-5 ${goal.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{goal.title}</h4>
                      <p className="text-xs text-muted-foreground">Target: {goal.deadline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-success">
                      ${goal.current.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      of ${goal.target.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <Progress value={percentage} className="h-3" />
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">
                    {percentage.toFixed(1)}% complete
                  </span>
                  <span className="font-medium text-primary">
                    ${remaining.toLocaleString()} to go
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;