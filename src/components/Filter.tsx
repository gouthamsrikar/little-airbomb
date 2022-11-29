import React, { useCallback, useRef, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';


import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import { MainFilterButton, } from './buttons/FilterButton';

const Filter = () => {

    const data: string[] = info;

    const sliderRef = useRef<SwiperCore.SwiperRef>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();

    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();

    }, []);


    return (
        <div className='px-3 sm:px-10 lg:px-20  xl:px-30 2xl:px-40 flex my-5 items-center sm:overflow-x-auto'>
            <div className='hidden sm:inline-flex   space-x-2 w-[365px]'>
                <MainFilterButton title='Dates' />
                <MainFilterButton title='Group size' />
                <MainFilterButton title='More filters' />
                <div className=' w-[1px] h-[30px] bg-gray-200 mx-4'></div>

            </div >



            <div
                onClick={() => {
                    handlePrev()
                }}
                className={currentIndex === 0 ? "hidden transition duration-300" : 'hidden sm:inline p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'}>
                <BiChevronLeft className='h-[20px] w-[20px]' />
            </div>

            <div className='container overflow-x-auto px-2 hidden sm:inline relative'>

                <Swiper
                    ref={sliderRef}
                    width={150}
                    slidesPerGroup={4}
                    // className="mySwiper"
                    spaceBetween={10}
                    onActiveIndexChange={() => {
                        if (sliderRef.current?.swiper.activeIndex !== (data.length / 4) - 1) { setCurrentIndex(sliderRef.current?.swiper.activeIndex ?? 0) }
                        else {
                            setCurrentIndex(-1)
                        }
                        console.log(sliderRef.current?.swiper.activeIndex)
                    }}

                >
                    {data.map((e) => <SwiperSlide className='text-center shrink items-center justify-center py-[7px] text-sm px-3 rounded-full bg-gray-100 border-gray-300 cursor-pointer active:scale-90 transition duration-300'>
                        {e}
                        {/* <SocialFilterButton title='hello' /> */}
                    </SwiperSlide>)}

                </Swiper>

            </div>



            <div
                onClick={() => {
                    handleNext()
                }}

                className={currentIndex === -1 ? "hidden transition duration-300  sm:inline" : 'hidden sm:inline p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'}>
                <BiChevronRight className='h-[20px] w-[20px]' />
            </div>
        </div>
    )
}

export default Filter






const info =["Great for groups", "Animals", "Art & writing", "Baking", "Cooking", "Dance", "Drinks", "Entertainment", "Fitness", "History & culture", "Magic", "MUsic", "Social impact",];