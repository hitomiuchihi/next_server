import prisma from "@/lib/prisma";

async function main() {
  // ユーザーの作成
  const userPeco = await prisma.user.create({
    data: {
      name: 'peco',
      email: 'peco@gmail.com',
    },
  });

  const userBitaro = await prisma.user.create({
    data: {
      name: 'bitaro',
      email: 'bitaro@gmail.com',
    },
  });

  // 投稿の作成
  await prisma.post.createMany({
    data: [
      {
        title: 'peco test 1 - title',
        content: 'peco test 1 - content',
        published: true,
        authorId: userPeco.id,
      },
      {
        title: 'peco test 2 - title',
        content: 'peco test 2 - content',
        published: false,
        authorId: userPeco.id,
      },
      {
        title: 'bitaro test 1 - title',
        content: 'bitaro test 1 - content',
        published: true,
        authorId: userBitaro.id,
      },
      {
        title: 'bitaro test 2 - title',
        content: 'bitaro test 2 - content',
        published: false,
        authorId: userBitaro.id,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('◉データのシーディングが完了しました！.');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
