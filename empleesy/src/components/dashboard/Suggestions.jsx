import React from 'react'
import pic from '../../assets/img-2.jpeg'
import Message from '../../SuggestionCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Freemoode, Pagination } from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'

const Suggestions = () => {
    return (
        <div className=" mt-6 ml-4 flex flex-col gap-2 border w-[35rem] h-88 bg-white p-4 rounded-[21px] shadow-md ">
            <h3 className='text-stone-500'>Suggestions from employees</h3>
            <div className='flex flex-col items-center'>

                {Message.map((suggestion, index) => (
                    <div className='bg-blue-100 h-28 w-[32rem] flex flex-col mt-2 mb-2 p-2   rounded-[21px] shadow-md '>

                        <div className='flex  gap-3 pt-1 ' key={index}>

                            <img className='w-9 h-9 ml-2 ' src={suggestion.image} />
                            <div>
                                <h3 className='text-[14px]'>{suggestion.name}</h3>
                                <p className='text-[10px]'>{suggestion.role}</p>
                            </div>
                        </div>

                        <div className='flex justify-center p-3'>
                            <p className='text-[13px]'>{suggestion.message}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div >

    )
}

export default Suggestions