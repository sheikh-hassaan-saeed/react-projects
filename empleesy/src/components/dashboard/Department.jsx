import React from 'react'

const Department = () => {
    return (
        <div className=" mt-6 ml-4 flex flex-col gap-2 border w-[35rem] h-88 bg-white p-4 rounded-[21px] shadow-md ">
            <h3 className='text-stone-500'>Top Performing Departments</h3>

            {/* <div className='h-0.5 w-56 bg-stone-500 text-stone-500'>
            </div> */}

            <div className='flex gap-12 mt-3  '>

                <div className=' ml-4'>
                    <p>Departments</p>
                </div>

                <div className='flex gap-10'>
                    <p >Revenue</p>
                    <p>W/L</p>
                </div>


            </div>



            <div className='flex gap-36 p-2 mt-1 bg-stone-200 rounded-[15px]'>

                <div>
                    <p className='mb-2 py-1 px-4 rounded-[21px]' >Engineering</p>
                    <p className='mb-2  py-1 px-4 rounded-[21px]'>Marketing</p>
                    <p className='mb-2  py-1 px-4 rounded-[21px]'>UI/UX</p>
                </div>

                <div className='flex gap-10' >
                    <div>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4 rounded-[21px]'>$207,808</p>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4 rounded-[21px]'>$180,434</p>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4 rounded-[21px]'>$120,948</p>
                    </div>

                    <div>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4 rounded-[21px]'>23%</p>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4 rounded-[21px]'>17%</p>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4 rounded-[21px]'>12%</p>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default Department