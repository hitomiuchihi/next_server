import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GETリクエストの処理
export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

// POSTリクエストの処理
export async function POST(req: Request) {
  const data = await req.json();
  const newPost = await prisma.post.create({
    data: {
        title: data.title,
        content: data.content,
        published: data.published,
        authorId: data.authorId
    },
  });
  return NextResponse.json(newPost);
}
