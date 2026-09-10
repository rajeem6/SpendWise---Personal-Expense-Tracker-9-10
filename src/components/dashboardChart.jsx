import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardChart = ({ expenses }) => {
  const chartData = expenses.reduce((total, expense) => {
    if (total[expense.category]) {
      total[expense.category] = total[expense.category] + expense.amount;
    } else {
      total[expense.category] = expense.amount;
    }
    return total;
  }, {});
  const newData = Object.entries(chartData).map(([category, amount]) => {
    return {
      category: category,
      amount: amount,
    };
  });

  return (
    <div className="dashboard__chart">
      <h3 className="dashboard__chart__title">Chart Data</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={newData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" animationDuration={1000} fill="white" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
