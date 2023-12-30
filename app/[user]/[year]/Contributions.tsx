import { UserYear, getContributions } from "@/app/lib/contributions";
import Scene from "./Scene";

export default async function Contributions({ user, year }: UserYear) {
  let data = await getContributions({ user, year });
  return (
      <Scene contributions={data.contributions} totalContributions={data.totalContributions} />
  );
}
