import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const advice = await prisma.advice.findMany();
    return new NextResponse(JSON.stringify(advice), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    const { userAdvice } = await req.json();
    const res = await prisma.advice.create({
      data: {
        advice: userAdvice,
      },
    });
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
