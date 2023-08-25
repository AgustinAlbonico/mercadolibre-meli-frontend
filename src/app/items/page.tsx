import axios from 'axios'
import Link from 'next/link'
import api from '../api'

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string }
}) {
  const { results } = await api.item.search(searchParams.search)

  return (
    <section>
      <article>
        {results.map((product) => (
          <Link
            href={'/items/' + product.id}
            key={product.id}
            className='flex gap-4 w-[55%] mx-auto my-5'
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className='h-24 rounded-md'
            />
            <div className='flex flex-col justify-center items-start'>
              <p className='font-bold'>
                {Number(product.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: product.currency_id,
                })}
              </p>
              <h2>{product.title}</h2>
            </div>
            <span className='ml-auto text-sm capitalize opacity-50'>
              {product.seller_address.city.name.toLowerCase()}
            </span>
          </Link>
        ))}
      </article>
    </section>
  )
}
