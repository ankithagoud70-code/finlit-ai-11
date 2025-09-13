import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, DollarSign, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddExpense = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
    notes: ""
  });

  const categories = [
    "Food & Dining",
    "Transportation", 
    "Entertainment",
    "Shopping",
    "Bills & Utilities",
    "Healthcare",
    "Education",
    "Travel",
    "Other"
  ];

  const aiSuggestions = [
    { text: "Coffee shop", category: "Food & Dining", confidence: 95 },
    { text: "Grocery store", category: "Food & Dining", confidence: 92 },
    { text: "Gas station", category: "Transportation", confidence: 88 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Expense Added!",
      description: "Your expense has been categorized and added to your budget tracker.",
    });
    setFormData({
      amount: "",
      description: "",
      category: "",
      date: "",
      notes: ""
    });
  };

  const handleAISuggestion = (suggestion: any) => {
    setFormData({
      ...formData,
      description: suggestion.text,
      category: suggestion.category
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <span>Add New Expense</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="text-lg font-semibold"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                  <CalendarDays className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Where did you spend this money?"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any additional details..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Add Expense
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>AI Smart Suggestions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Based on your spending patterns, here are quick expense options:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer transition-colors"
                  onClick={() => handleAISuggestion(suggestion)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium">{suggestion.text}</div>
                    <Badge variant="secondary" className="text-xs">
                      {suggestion.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-success font-medium">
                      {suggestion.confidence}% match
                    </div>
                    <Button size="sm" variant="ghost">
                      Use
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddExpense;