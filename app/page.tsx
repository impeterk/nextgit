
import {Suspense} from 'react'
import contributions from '@/app/lib/contributions'


async function getData() {
  let res = await fetch('https://dummyjson.com/products?limit=10')
  return res.json()
}

function Loading() {
  return (
    <p className='text-accent-foreground text-2xl'>Loading ...</p>
  )
}

async function Products() {
  const {products} = await getData()

  return(
    products.map((item: typeof products[number]) => (
      <li key={item.id}>{item.title}</li>
    ))
  )
}


export default async function Home() {

  return (
    <ul>
      <Suspense
      fallback={<Loading />}
      >
        <Products />

      </Suspense>
    </ul>
  )
}
 