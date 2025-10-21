import React from 'react'
import pic from '../../assets/img-2.jpeg'
const Suggestions = () => {
    return (
        <div className=" mt-6 ml-4 border w-[35rem] h-48 bg-white p-4 rounded-[21px] shadow-md ">
            <h3 className='text-stone-500'>Suggestions from employees</h3>
            <div className='flex flex-col items-center'>


                <div className='bg-stone-200 h-28 w-[32rem] flex flex-col mt-2 p-2 rounded-[21px]'>

                    <div className='flex gap-3 pt-1'>
                        <img className='w-9 h-9 ml-2 ' src={pic} />
                        <div>
                            <h3 className='text-[14px]'>Julia Webster</h3>
                            <p className='text-[10px]'>Backend Engineer</p>
                        </div>
                    </div>

                    <div className='flex justify-center p-3'>
                        <p className='text-[13px]'>We could integrate CI/CD pipelines to speed up deployments and
                            reduce manual errors.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Suggestions