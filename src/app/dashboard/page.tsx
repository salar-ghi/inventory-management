// "use client"

// import CardPopularProducts from "./CardPopularProducts"

// const Dashboard = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">

//       <CardPopularProducts />
//       <div className="row-span-3 xl:row-span-6 bg-gray-500" />
//       <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500" />
//       <div className="row-span-3 bg-gray-500" />
//       <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
//       <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
//       <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
//     </div>
//   )
// }

// export default Dashboard
"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "147",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Sales",
            amount: "1000.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;