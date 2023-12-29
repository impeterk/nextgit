import { UserYear, getContributions } from "@/app/lib/contributions";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import styles from './table.module.css'

export default async function ContributionsTable({ user, year }: UserYear) {
  let data = await getContributions({ user, year });
  let keys = []
  return (
    <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center my-10">Total Contributions in {year} : {data.totalContributions}</h2>
    <Table>
      <TableBody>
        {data.contributions.map((row, index) => (
          <TableRow key={index}>
            {row.map(day => (
              <TableCell key={day?.day} data-level={day?.level || null} style={styles}>
                </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
        </>
  );
}
