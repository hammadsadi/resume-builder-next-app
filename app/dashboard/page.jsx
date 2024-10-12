import connectWithDatabase from "@/config/db";
import React from "react";

const DashboardPage = async () => {
  await connectWithDatabase();
  return <div>DashboardPage</div>;
};

export default DashboardPage;
