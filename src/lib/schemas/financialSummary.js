export default {
  type: "object",
  properties: {
    financial_summary: {
      type: "object",
      properties: {
        total_income: { type: "number" },
        total_expenses: { type: "number" },
        net_balance: { type: "number" },
        spending_comparison: {
          type: "array",
          items: {
            type: "object",
            properties: {
              category_name: { type: "string" },
              budgeted: { type: "number" },
              actual: { type: "number" },
              over_budget: { type: "boolean" },
            },
            required: ["category_name", "budgeted", "actual", "over_budget"],
            additionalProperties: false,
          },
        },
      },
      required: [
        "total_income",
        "total_expenses",
        "net_balance",
        "spending_comparison",
      ],
      additionalProperties: false,
    },
    recurring_expense_analysis: {
      type: "object",
      properties: {
        recurring_expenses: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              expense: { type: "number" },
            },
            required: ["name", "expense"],
            additionalProperties: false,
          },
        },
        total_recurring_monthly: { type: "number" },
      },
      required: ["recurring_expenses", "total_recurring_monthly"],
      additionalProperties: false,
    },
    financial_goals_analysis: {
      type: "object",
      properties: {
        goals_progress: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              targetAmount: { type: "number" },
              timeLeft: { type: "number" },
              progress: { type: "number" },
            },
            required: ["name", "targetAmount", "timeLeft", "progress"],
            additionalProperties: false,
          },
        },
      },
      required: ["goals_progress"],
      additionalProperties: false,
    },
    financial_recommendations: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: [
    "financial_summary",
    "recurring_expense_analysis",
    "financial_goals_analysis",
    "financial_recommendations",
  ],
  additionalProperties: false,
};
