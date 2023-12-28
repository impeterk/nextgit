import{ parseHTML }from 'linkedom'

export interface UserYear {
    user?: string,
    year?: string
}

export default async function getContributions({user = 'impeterk', year = '2023'}: UserYear){
    const html = await getRawContributions({user, year})
    parseContributions(html)

    return html
}

async function getRawContributions({user = 'impeterk', year = '2023'}: UserYear): Promise<string> {
    const res = await fetch(`https://github.com/users/${user}/contributions?from=${year}-12-01&to=${year}-12-31`)
 
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`)
  }
  return await res.text()
}

function parseContributions(html: string) {
    const {document} = parseHTML(html)

    const rows = document.querySelectorAll('tbody > tr')

    const contributions = []

    // @ts-ignore
    for (const row of rows) {
        const days = row.querySelectorAll('td:not(.ContributionCalendar-label)')
        
        const currentRow = []

        for (const day of days){
            console.log(day.innerText)
        }
    }
    
}