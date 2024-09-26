// api/users
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GETリクエストの処理
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POSTリクエストの処理
export async function POST(req: Request) {
  const data = await req.json();
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return NextResponse.json(newUser);
}
