import {redirect} from 'next/navigation'

export default async function Home() {

    let year = new Date().getFullYear() - 1 
    year = year >= 2023 ? year : 2023
return  redirect(`/impeterk/${year}`)
}
 