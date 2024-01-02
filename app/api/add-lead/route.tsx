import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Name = searchParams.get('Name');
  const Email = searchParams.get('Email');
  const Phone = searchParams.get('Phone');
  const Postcode = searchParams.get('Postcode');
  const Message = searchParams.get('Message');



 
  try {
    if (!Name || !Email || !Phone || !Postcode || !Message ) throw new Error('Check the parameters');
    await sql`INSERT INTO Users (Name, Email, Phone, Postcode, Message) VALUES (${Name}, ${Email}, ${Phone}, ${Postcode}, ${Message} );`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  //http://localhost:3000/api/add-lead?Name=Final20%Test&Email=hopefully@gmail.com&Phone=07735&Postcode=N42RG&Message=Testing20%breaks

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
