import { parseHTML } from "linkedom";

export interface UserYear {
  user?: string;
  year?: string;
}

export async function getContributions({
  user = "impeterk",
  year = "2023",
}: UserYear) {
  const html = await getRawContributions({ user, year });
  return parseContributions(html);
}

export async function getRawContributions({
  user = "impeterk",
  year = "2023",
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

  // total constributions
  const totalContributions = document
    .querySelector<HTMLHeadingElement>("h2")
    ?.innerText.split(" ")[1];
  const calendar = document.querySelectorAll<HTMLElement>("tool-tip");

  const rows = document.querySelectorAll("tbody > tr");

  const contributions = [];

  // @ts-ignore
  for (const row of rows) {
    const days = row.querySelectorAll("td:not(.ContributionCalendar-label)");

    const currentRow = [];

    for (const day of days) {
      const dayId = day.id;
      let date = day.getAttribute("data-date");
      if (date) {
        // @ts-ignore
        for (const entry of calendar) {
          const entryId = entry.getAttribute("for");

          let data = entry.innerText.split(" ");
          if (entryId === dayId) {
            date = date.split("-");
            const contribution: {
              count: number;
              day: string;
              month: string;
              year: string;
              level: number;
            } = {
              count: data[0] === "No" ? 0 : +data[0],
              day: date[2],
              month: data[3],
              year: date[0],
              level: day.dataset.level!,
            };
            currentRow.push(contribution);
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
