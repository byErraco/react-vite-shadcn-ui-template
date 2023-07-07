import React from "react";
import { Separator } from "../components/ui/separator";
import { Outlet } from "react-router-dom";
import { CustomersTableSimple } from "../components/customers/customers-table";
import TasksTable from "../components/customers/datatable-v1/data-table-example";
import PaymentsTable from "../components/customers/datatable-v2/data-table-example-v2";

const CustomersPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Customers.</h2>
        <p className="text-muted-foreground">
          Example of a table with customers.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 ">
          {/* <div className="flex-1 lg:max-w-2xl"> */}
          <div className="space-y-6">
            <CustomersTableSimple />
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Tasks.</h2>
              <p className="text-muted-foreground">
                Example of a datatable with tasks.
              </p>
            </div>
            <TasksTable />
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Payments.</h2>
              <p className="text-muted-foreground">
                Example of a datatable v2 with payments.
              </p>
            </div>
            <PaymentsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
