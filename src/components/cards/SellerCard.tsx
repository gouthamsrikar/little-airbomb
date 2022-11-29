import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'


export type SellerCardProps = {
    Width: number
    city: String
    bgUrl: String
    rating: number
    totalRatings: number
    title: string
    pricePerPerson: number
}


const SellerCard = (props: SellerCardProps) => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${props.bgUrl})`,width:props.Width,aspectRatio:0.75}} 
            className="border border-[#B0B0B0] relative bg-cover rounded-xl cursor-pointer hover:bg-" 
            
            >
                <FiHeart color='white' className='absolute right-4 top-4' size={20} fill="black" fillOpacity={0.5}/>
            </div>
            <div className='py-1'>
                <div className='flex items-center'>
                    <AiFillStar size={16}/>
                    <span className='font-light'>
                        {props.rating} <span className='text-[#717171] font-light'>
                            ({props.totalRatings}) · {props.city}
                        </span>
                    </span>
                </div>
                <div className='font-light'>
                    {props.title}
                </div>
                <div className='font-medium'>
                    From ₹ {props.pricePerPerson} 
                    <span className='font-light'>
                        /person
                    </span>


                </div>

            </div>
        </div>
    )
}

export default SellerCard