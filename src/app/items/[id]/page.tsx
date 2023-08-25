import api from '../../api'

export default async function ItemsPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await api.item.fetch(id)

  return (
    <section className='w-[85%] mx-auto mt-6'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='rounded-md h-40 mx-auto'
      />
      <div className='flex items-center justify-between'>
        <p className='my-4 text-4xl'>{product.title}</p>
        <p className='font-bold text-3xl my-4'>
          {Number(product.price).toLocaleString('es-AR', {
            style: 'currency',
            currency: product.currency_id,
          })}
        </p>
      </div>
      <hr />
      <p className='font-medium text-lg my-4'>{product.description}</p>
    </section>
  )
}
