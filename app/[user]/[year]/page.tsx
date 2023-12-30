import { Suspense } from "react";
import Contributions from "./Contributions";
import { Metadata, ResolvingMetadata } from "next";
import LoadingSkeleton from "./LoadingSkeleton";

export async function generateMetadata(
  {
    params,
  }: {
    params: { user: string; year: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { user, year } = params;
  return {
    title: `${user} Contributions in ${year}`,
    description: "Visualize your Github contributions in 3D Thank to Next.js, ThreeJS and React Three Fiber. Created by Peter Kudeláš",
  };
}

export default function Page({
  params,
}: {
  params: { user: string; year: string };
}) {
  const { user, year } = params;

  return (
    <div key={user + year} className="h-full relative">
      <Suspense fallback={<LoadingSkeleton />}>
        <Contributions user={user} year={year} />
      </Suspense>
    </div>
  );
}
