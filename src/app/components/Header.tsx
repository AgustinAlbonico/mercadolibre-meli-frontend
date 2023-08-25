import { useState } from 'react'

export default function Header() {
  return (
    <header className='h-16 bg-[#FFF159] justify-center items-center flex'>
      <div className='w-[55%] m-auto flex h-10 justify-around'>
        <a href='/' className='logo w-[20%] z-40 cursor-pointer' />
        <form
          action='/items'
          className='flex h-auto w-[80%] items-center justify-between'
        >
          <input
            type='string'
            name='search'
            className='bg-white justify-center text-black h-[90%] w-[80%] rounded-md pl-3 border-solid border-[1px] border-black border-opacity-10'
            placeholder='Buscar productos, marcas y más…'
            required
          />
          <button className='text-white bg-black text-center h-[90%] font-medium px-8 rounded-md'>
            Buscar
          </button>
        </form>
      </div>
    </header>
  )
}
