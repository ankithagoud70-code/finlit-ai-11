import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Target, TrendingUp } from "lucide-react";

const DashboardOverview = () => {
  const overviewCards = [
    {
      title: "Total Balance",
      value: "$2,847.50",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
      description: "vs last month"
    },
    {
      title: "Monthly Spending",
      value: "$1,247.80",
      change: "-8.3%",
      trend: "down",
      icon: ArrowDownRight,
      description: "vs last month"
    },
    {
      title: "Budget Remaining",
      value: "$752.20",
      change: "68%",
      trend: "neutral",
      icon: Target,
      description: "of monthly budget"
    },
    {
      title: "Savings Goal",
      value: "$3,200",
      change: "84%",
      trend: "up",
      icon: ArrowUpRight,
      description: "progress to goal"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {overviewCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <Icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {card.value}
              </div>
              <div className="flex items-center text-xs">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  card.trend === 'up' ? 'bg-success/10 text-success' :
                  card.trend === 'down' ? 'bg-warning/10 text-warning' :
                  'bg-primary/10 text-primary'
                }`}>
                  {card.change}
                </span>
                <span className="ml-2 text-muted-foreground">
                  {card.description}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardOverview;