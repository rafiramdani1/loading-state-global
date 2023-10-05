import React from 'react'
import { ApiMoc } from './ApiMoc'
import { useContext } from 'react'
import { LoadingContext } from './LoadingContext'

const UploadImage = () => {

  const { setLoading } = useContext(LoadingContext)

  const handleUpload = async () => {
    try {
      setLoading(true)
      await ApiMoc()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center mt-12'>
      <div className='text-center'>
        <h1 className='text-indigo-600 text-2xl'>Upload Image</h1>
        <button onClick={handleUpload} className='border bg-indigo-600 py-3 px-5 rounded-md text-white mt-3'>Upload</button>
      </div>
    </div>
  )
}

export default UploadImage