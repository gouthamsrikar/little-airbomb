import React from 'react'


type CollectionCardProps = {
    title: String
    bgUrl: String
    width: number
    ratio: number
}

const CollectionCard = (props: CollectionCardProps) => {
    return (

        <div
            style={{ backgroundImage: `url(${props.bgUrl})`, backgroundPosition: `center`, width: props.width, aspectRatio: props.ratio }}
            className='ml-[30px] p-6 bg-cover bg-gray-300  flex-col flex  rounded-2xl justify-between'>

            <div className='max-w-[40%]'>
                <h2 className='text-white text-xs'>
                    Collection
                </h2>
                <p className='text-white text-2xl'>
                    {props.title}
                </p>
            </div>


            <div className='w-[80px] cursor-pointer py-1 px-3 bg-white rounded-lg text-sm active:scale-90 transition duration-300'>
                Show all
            </div>
        </div>



    )
}

export default CollectionCard