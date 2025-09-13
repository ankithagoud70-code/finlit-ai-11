import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Car, ShoppingBag, Zap, Gamepad2 } from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      description: "Starbucks Coffee",
      category: "Food & Dining",
      amount: -5.67,
      date: "Today",
      icon: Coffee,
      categoryColor: "bg-blue-100 text-blue-700"
    },
    {
      id: 2,
      description: "Uber Ride",
      category: "Transportation",
      amount: -12.45,
      date: "Yesterday",
      icon: Car,
      categoryColor: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      description: "Amazon Purchase",
      category: "Shopping",
      amount: -89.99,
      date: "2 days ago",
      icon: ShoppingBag,
      categoryColor: "bg-red-100 text-red-700"
    },
    {
      id: 4,
      description: "Electric Bill",
      category: "Bills & Utilities",
      amount: -67.80,
      date: "3 days ago",
      icon: Zap,
      categoryColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 5,
      description: "Netflix Subscription",
      category: "Entertainment",
      amount: -15.99,
      date: "5 days ago",
      icon: Gamepad2,
      categoryColor: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className={`text-xs ${transaction.categoryColor}`}>
                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`font-semibold ${transaction.amount < 0 ? 'text-destructive' : 'text-success'}`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;