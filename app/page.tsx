import { Card, Title, Text } from '@tremor/react';
import Search from './components/search';
import CustomersTable from './components/table';
import UsersList from './components/user-list';
import Customer from './interface/interface';
import prisma from '../lib/prisma';



export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const users = await prisma.customers.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      }
    ],
    where: {
      OR: [
        {
          name: {
            contains: search,
          },
        },
        // Add more conditions based on other fields if needed
      ],
    },

  }) as Customer[];
    ;

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
