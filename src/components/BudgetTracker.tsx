import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const BudgetTracker = () => {
  const budgetCategories = [
    {
      category: "Food & Dining",
      budgeted: 400,
      spent: 285,
      remaining: 115,
      status: "good"
    },
    {
      category: "Transportation",
      budgeted: 200,
      spent: 180,
      remaining: 20,
      status: "warning"
    },
    {
      category: "Entertainment",
      budgeted: 150,
      spent: 165,
      remaining: -15,
      status: "over"
    },
    {
      category: "Shopping",
      budgeted: 300,
      spent: 220,
      remaining: 80,
      status: "good"
    },
    {
      category: "Bills & Utilities",
      budgeted: 250,
      spent: 180,
      remaining: 70,
      status: "good"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'warning':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'over':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'over':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-success';
      case 'warning':
        return 'bg-warning';
      case 'over':
        return 'bg-destructive';
      default:
        return 'bg-primary';
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Budget Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgetCategories.map((budget, index) => {
            const percentage = Math.min((budget.spent / budget.budgeted) * 100, 100);
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(budget.status)}
                    <span className="font-medium text-sm">{budget.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">
                      ${budget.spent} / ${budget.budgeted}
                    </div>
                    <div className={`text-xs ${getStatusColor(budget.status)}`}>
                      {budget.remaining >= 0 
                        ? `$${budget.remaining} remaining`
                        : `$${Math.abs(budget.remaining)} over budget`
                      }
                    </div>
                  </div>
                </div>
                <Progress 
                  value={percentage} 
                  className={`h-2 ${getProgressColor(budget.status)}`}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetTracker;