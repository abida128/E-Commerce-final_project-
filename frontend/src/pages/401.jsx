import { Link } from 'react-router-dom'

export default function Error401() {
  return (
    <div className='flex items-center justify-center min-h-screen p-5'>
      <div className='w-90vw md:w-auto'>
        <h4 className='text-2xl mb-2'>You are not authorized!</h4>
        <p className='mb-6 text-gray-500'>
          You do not have permission to view this page using the credentials that you have provided while login.
          <br />
          Please contact your site administrator.
        </p>
        <Link to='/' className='block'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Back to Home</button>
        </Link>
      </div>
      {/* <img
        className='max-w-full mt-12'
        src={`/images/pages/girl-with-laptop-${theme.palette.mode}.png`}
        alt='error-illustration'
        width='450'
      /> */}
    </div>
  )
}
