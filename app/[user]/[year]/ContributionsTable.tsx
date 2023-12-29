import { UserYear, getContributions } from "@/app/lib/contributions";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function ContributionsTable({ user, year }: UserYear) {
  let data = await getContributions({ user, year });
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center my-10">
        Total Contributions in {year} : {data.totalContributions}
      </h2>
      <table>
        <tbody>
          {data.contributions.map((row, index) => (
            <tr key={index}>
              {row.map((day) => (
                <td
                  key={day?.day}
                  data-level={day?.level || null}
                  className="group relative transition-all duration-500 w-4 h-4 m-2 border border-background"
                >
                  <span className="hidden group-hover:flex  transition-all duration-500  opacity-0 group-hover:opacity-100 absolute z-50 -translate-y-full text-xs bg-background rounded gap-2 -translate-x-1/3 px-2 py-1">
                    <span>{day?.count} </span>
                    {` Contribution${day?.count == 1 ? "" : "s"}`}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
