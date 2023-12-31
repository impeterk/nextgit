import { parseHTML } from "linkedom";

export interface UserYear {
  user?: string;
  year?: string;
}

export async function getContributions({
  user,
  year
}: UserYear) {
  const html = await getRawContributions({ user, year });
  return parseContributions(html);
}

export async function getRawContributions({
  user,
  year
}: UserYear) {
  const res = await fetch(
    `https://github.com/users/${user}/contributions?from=${year}-12-01&to=${year}-12-31`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const text = await res.text();
  return text;
}

function parseContributions(html: string) {
  const { document } = parseHTML(html);
  const calendar = document.querySelectorAll<HTMLElement>("tool-tip")
  // total constributions
  let totalContributions = 0

  const rows = document.querySelectorAll("tbody > tr");

  const contributions:any[] = [];

  // @ts-ignore
  for (const row of rows) {
    const days = row.querySelectorAll("td:not(.ContributionCalendar-label)");

    const currentRow: any[] = [];

    for (const day of days) {
      const dayId = day.id;
      let date: any | null = day.getAttribute("data-date");
      if (date) {
        // @ts-ignore
        for (const entry of calendar) {
          const entryId = entry.getAttribute("for");

          let data = entry.innerText.split(" ");
          if (entryId === dayId) {
            date = date?.split("-") as string[];
            const contribution: {
              count: number;
              day: number;
              month: string;
              year: string;
              level: number;
            } = {
              count: data[0] === "No" ? 0 : +data[0],
              day: Number(date[2]),
              month: data[3],
              year: date[0],
              level: Number(day.getAttribute('data-level')),
            };
            currentRow.push(contribution);
            totalContributions += contribution.count
          }
        }
      } else {
        currentRow.push(null);
      }
    }
    contributions.push(currentRow);
  }
  const response = {
    totalContributions,
    contributions,
  };

  return response;
}
