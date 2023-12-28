import getContributions from "@/app/lib/contributions";

export async function GET(
    request: Request,
    { params }: { params: { user: string, year: string } }
  ) {
    const {user, year} = params

    let res = await getContributions({user, year})

    return Response.json(res)
  }