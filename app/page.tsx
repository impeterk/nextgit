import {redirect} from 'next/navigation'

export default async function Home() {

    const year = new Date().getFullYear() - 1
return  redirect(`/impeterk/${year}`)
}
 