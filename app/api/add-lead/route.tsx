import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cusName = searchParams.get('cusName');
  const cusEmail = searchParams.get('cusEmail');

 
  try {
    if (!cusName || !cusEmail) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Users (Name, Email) VALUES (${cusName}, ${cusEmail});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const users = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ users }, { status: 200 });
}