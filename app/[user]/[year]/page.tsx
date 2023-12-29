import { Suspense } from "react";
import ContributionsTable from "./ContributionsTable";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata, ResolvingMetadata } from "next";

function SkeletonTable() {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  export async function generateMetadata(
    { params }: {
        params: { user: string; year: string };
      },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route paramsc
    const {user, year} = params
   
    return {
      title: `${user} - ${year} git Contributions`
    }
  }

export default async function Page({
  params,
}: {
  params: { user: string; year: string };
}) {
  const { user, year } = params;

  return (
    <div className="w-fit mx-auto my-40">
      <Suspense fallback={<SkeletonTable/>}>
        <ContributionsTable user={user} year={year} />
      </Suspense>
    </div>
  );
}
