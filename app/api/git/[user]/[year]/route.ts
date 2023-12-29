export const runtime = 'edge'

import {getContributions} from "@/app/lib/contributions";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { user: string, year: string } }
  ) {
    const {user, year} = params

    let res = await getContributions({user, year})

    return NextResponse.json(res)
  }