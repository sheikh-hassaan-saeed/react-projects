import React from 'react'
import pic from '../../assets/img-2.jpeg'
import Message from '../../SuggestionCard'

const Suggestions = () => {
    return (
        <div className=" mt-2 flex flex-col gap-2 border w-[24rem] h-44 bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-[21px] shadow-md ml-3 ">
            <h3 className='text-slate-600 text-[12px]'>Suggestions from employees</h3>
            <div className='flex flex-col items-center'>

                {Message.map((suggestion, index) => (
                    <div className='bg-blue-100 h-28 w-[22rem] flex flex-col mt-2 mb-2 p-2 rounded-[21px] shadow-md '>

                        <div className='flex gap-3 pt-3 ' key={index}>

                            <img className='w-7 h-7 ml-2 ' src={suggestion.image} />
                            <div>
                                <h3 className='text-[12px]'>{suggestion.name}</h3>
                                <p className='text-[10px]'>{suggestion.role}</p>
                            </div>
                        </div>

                        <div className='flex justify-center px-3 py-2 '>
                            <p className='text-[13px]'>{suggestion.message}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div >

    )
}

export default Suggestions