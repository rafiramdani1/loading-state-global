import React from 'react'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LoadingContext } from './LoadingContext'

const Navbar = () => {
  const { loading } = useContext(LoadingContext)

  return (
    <>
      <nav className='bg-indigo-500'>
        <ul className='flex justify-between p-4 text-white text-base'>
          <div className='flex gap-4'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/upload'}>Upload image</Link>
            </li>
          </div>

          {loading ?
            <h2>Loading upload...</h2>
            : ''
          }

        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar