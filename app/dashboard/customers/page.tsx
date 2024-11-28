import { Suspense } from "react";
import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      <Suspense key={customers.length} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
