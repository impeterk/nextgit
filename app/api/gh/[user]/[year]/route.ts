import { getContributions, getRawContributions } from "@/app/lib/contributions";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { user: string; year: string } },
) {
  let res = await getContributions(params);
  return NextResponse.json(res);
}
