import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Tunggu sampai searchParams ter-resolve
  const { query } = await props.searchParams;

  // Ambil data customers sesuai query (kalau undefined, pakai string kosong)
  const customers = await fetchFilteredCustomers(query ?? '');

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
