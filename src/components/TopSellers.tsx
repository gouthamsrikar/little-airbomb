import React, { useCallback, useEffect, useRef, useState } from 'react'
import SellerCard from './cards/SellerCard';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import { SellerCardProps } from './cards/SellerCard';



const TopSellers = () => {

    const ref = useRef<HTMLDivElement>(null);


    const [width, setWidth] = useState(0);
    const [crossAxisCount, setcrossAxisCount] = useState(6);


    const data: SellerCardProps[] = info;

    const updateCards = () => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);

            if (window.innerWidth >= 1563) {
                setcrossAxisCount(6)
            }
            else if (window.innerWidth >= 1280) {
                setcrossAxisCount(5)
            }
            else if (window.innerWidth >= 1024) {
                setcrossAxisCount(4)
            }
            else if (window.innerWidth >= 640) {
                setcrossAxisCount(3)
            }
            else {
                setcrossAxisCount(2)
            }

        }
    }

    const sliderRef = useRef<SwiperCore.SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();


    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);



    useEffect(() => {
        updateCards()
        window.addEventListener('resize', updateCards);
        return () => {
            window.removeEventListener('resize', updateCards);
        };
    }, []);


    return (
        <div className='px-3 sm:px-10 lg:px-20 xl:px-30 2xl:px-40 '>
            <div className='py-4 flex items-center justify-between'>
                <h1 className='font-normal text-xl'>
                    Top sellers
                </h1>
                <div className='hidden sm:inline-flex items-center space-x-3'>
                    <div className='underline cursor-pointer'>
                        show (125)
                    </div>
                    <div
                        onClick={() => {
                            handlePrev()
                        }}

                        className='p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'>
                        <BiChevronLeft className='h-[20px] w-[20px]' />
                    </div>
                    <div
                        onClick={() => {
                            handleNext()
                        }}

                        className='p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'>
                        <BiChevronRight className='h-[20px] w-[20px]' />
                    </div>

                </div>
                <div className='sm:hidden cursor-pointer'>
                    <BiChevronRight size={25} />
                </div>
            </div>
            <div className='w-full   ' ref={ref}>

                <Swiper
                    ref={sliderRef}
                    spaceBetween={16}
                    slidesPerView={crossAxisCount}
                    className="mySwiper"
                    slidesPerGroup={crossAxisCount}
                >

                    {data.map((e) => <SwiperSlide>

                        <SellerCard
                            Width={(width - ((crossAxisCount - 1) * 16)) / crossAxisCount}
                            city={e.city}
                            bgUrl={e.bgUrl}
                            pricePerPerson={e.pricePerPerson}
                            rating={e.rating}
                            title={e.title}
                            totalRatings={e.totalRatings}
                        />
                    </SwiperSlide>)}
                    <SwiperSlide>
                        <div style={{ width: (width - ((crossAxisCount - 1) * 16)) / crossAxisCount, aspectRatio: 0.75 }}
                            className="relative bg-cover rounded-xl cursor-pointer  p-5 grid items-end border border-[#B0B0B0]" >

                            <div className='flex justify-between items-center '>
                                <p>Show All</p>
                                <div className='p-1 rounded-full'>
                                    <BiChevronRight size={20} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>
        </div>
    )
}

export default TopSellers

const info = [
    {
        Width: 0,
        city: "Portugal",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2660264-media_library/original/135a8001-dd90-49fd-bd41-2429dcb917a1.jpeg?im_w=480",
        rating: 4.32,
        totalRatings: 782,
        title: "The circus factory",
        pricePerPerson: 2300
    },
    {
        Width: 0,
        city: "Spain",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/b93b65ee-1cbb-43b5-8a55-ced3f4310f9c.jpg?im_w=480",
        rating: 4.78,
        totalRatings: 4535,
        title: "'No Spain no Game' The Festive Game",
        pricePerPerson: 6500
    },
    {
        Width: 0,
        city: "France",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/3b0fa9df-1461-46da-9aee-4dd45050d269.jpeg?im_w=480",
        rating: 4.23,
        totalRatings: 34243,
        title: "'From Paris with Laughs' The Holiday Scavenger Hunt",
        pricePerPerson: 4530
    },
    {
        Width: 0,
        city: "Italy",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?im_w=480",
        rating: 89,
        totalRatings: 78,
        title: "Pasta with the Grandmas",
        pricePerPerson: 2340
    },
    {
        Width: 0,
        city: "Poland",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=480",
        rating: 89,
        totalRatings: 78,
        title: "Murder Mystery Escape Room Game-Perfect for Team Building",
        pricePerPerson: 5430
    },
    {
        Width: 0,
        city: "Greece",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1710354-poster/original/932fc164-dfb7-47ba-aaf7-1a66fbfbdc74.jpeg?im_w=480",
        rating: 4.87,
        totalRatings: 342,
        title: "'True vs False' Funny Historical Game",
        pricePerPerson: 4560
    },
    {
        Width: 0,
        city: "Portugal",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2660264-media_library/original/135a8001-dd90-49fd-bd41-2429dcb917a1.jpeg?im_w=480",
        rating: 4.32,
        totalRatings: 782,
        title: "The circus factory",
        pricePerPerson: 2300
    },
    {
        Width: 0,
        city: "Spain",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/b93b65ee-1cbb-43b5-8a55-ced3f4310f9c.jpg?im_w=480",
        rating: 4.78,
        totalRatings: 4535,
        title: "'No Spain no Game' The Festive Game",
        pricePerPerson: 6500
    },
    {
        Width: 0,
        city: "France",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/3b0fa9df-1461-46da-9aee-4dd45050d269.jpeg?im_w=480",
        rating: 4.23,
        totalRatings: 34243,
        title: "'From Paris with Laughs' The Holiday Scavenger Hunt",
        pricePerPerson: 4530
    },
    {
        Width: 0,
        city: "Italy",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?im_w=480",
        rating: 89,
        totalRatings: 78,
        title: "Pasta with the Grandmas",
        pricePerPerson: 2340
    },
    {
        Width: 0,
        city: "Poland",
        bgUrl: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=480",
        rating: 89,
        totalRatings: 78,
        title: "Murder Mystery Escape Room Game-Perfect for Team Building",
        pricePerPerson: 5430
    },
]