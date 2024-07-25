import { NextResponse } from "next/server";
import createUser from "../createUser";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await createUser(data);
  } catch (error) {
    return NextResponse.json(null, { status: 400 });
  }

  return NextResponse.json(null, { status: 200 });
}
