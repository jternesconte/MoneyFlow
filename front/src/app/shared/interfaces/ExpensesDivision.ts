export interface ExpensesDivision {
  category: {
    categoryName: string;
    categorySpent: number;
    spentPercentage: number;
  }[];
  totalSpent: number;
}