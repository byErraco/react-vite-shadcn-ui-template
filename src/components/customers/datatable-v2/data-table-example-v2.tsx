import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];

export default function PaymentsTable() {
  return (
    <div className="container mx-auto py-10">
      {/* <DataTable columns={columns} data={[]} /> */}
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
