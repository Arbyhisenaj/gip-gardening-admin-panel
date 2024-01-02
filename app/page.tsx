import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import CustomersTable from './table';
import UsersList from './user-list';
import Customer from './interface/interface';



export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, name, postcode, email, message, phone
    FROM users 
    WHERE name ILIKE ${'%' + search + '%'}
    ORDER BY id DESC;
  `;
  const users = result.rows as Customer[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Gip Gardening Leads</Title>
      <Text>A list of leads that submitted the contact form on your website.</Text>
      <Search />
      <UsersList users={users} />
      <Card className="mt-6">
        <CustomersTable users={users} />
      </Card>
    </main>
  );
}
