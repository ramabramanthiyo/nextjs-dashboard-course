import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  // Ambil semua customers tanpa filter query
  const customers = await fetchFilteredCustomers('');

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
