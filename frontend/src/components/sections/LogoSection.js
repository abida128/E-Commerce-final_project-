import React from 'react';
import Logo1 from '../../Assets/images/logo-2.png'
import Logo2 from '../../Assets/images/logo-7.png'
import Logo3 from '../../Assets/images/logo-9.png'
import Logo4 from '../../Assets/images/logo-10.png'
import Logo5 from '../../Assets/images/logo-11.png'


const LogoSection = () => {
  return (
    <>
      <div className='container m-auto flex flex-col justify-around leading-10 lg:flex-row gap-10 mt-10'>
    <div className='font-semibold mt-6 p-6 leading-10'>
        <h5>Featured In:</h5>
    </div>
    <div className='flex flex-wrap gap-8 leading-10'>
        <img src={Logo1} alt='Logo' className='max-w-full h-[100px]' />
        <img src={Logo2} alt='Logo' className='max-w-full h-[100px]' />
        <img src={Logo3} alt='Logo' className='max-w-full h-[100px]' />
        <img src={Logo4} alt='Logo' className='max-w-full h-[100px] ' />
        <img src={Logo5} alt='Logo' className='max-w-full h-[100px]' />
    </div>
</div>

    </>
  )
}

export default LogoSection
