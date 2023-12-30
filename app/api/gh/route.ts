import { getContributions } from "@/app/lib/contributions";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest
) {
  const searchParams = request.nextUrl.searchParams
  const user = searchParams.get('user')!
  const year = searchParams.get('year')!
  try {
    let res = await getContributions({user, year});
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({error})
  }
}
