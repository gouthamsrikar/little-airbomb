
type FilterButtonProps = {
    title: string
}


export const SocialFilterButton = (props: FilterButtonProps) => {
    return (
        <div className='py-[7px] text-center   text-sm px-3 rounded-full bg-gray-100 border-gray-300 cursor-pointer active:scale-90 transition duration-300'>

            {props.title}


        </div>)
}

export const MainFilterButton = (props: FilterButtonProps) => {

    return (
        <div className='py-[6px] text-center   focus:scale-90 text-sm content-center px-3 border rounded-full hover:border-black cursor-pointer active:scale-90 transition duration-300'>

            {props.title}


        </div>)
}