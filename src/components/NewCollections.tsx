import React, { useCallback, useEffect, useRef, useState } from 'react'
import SwiperCore, { Swiper, SwiperSlide, } from 'swiper/react';
import CollectionCard from './cards/CollectionCard'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';




const NewCollections = () => {
    const ref = useRef<HTMLDivElement>(null);


    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pageRatio, setPageRatio] = useState(2.9);

    const updateCards = () => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }

        if (window.innerWidth >= 1563) {
            setPageRatio(2.9)
        }
        else if (window.innerWidth >= 1280) {
            setPageRatio(2.1)
        }
        else if (window.innerWidth >= 1024) {
            setPageRatio(1.9)
        }
        else if (window.innerWidth >= 640) {
            setPageRatio(1.5)
        }
        else {
            setPageRatio(1.1)
        }

    }

    const sliderRef = useRef<SwiperCore.SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
        setCurrentIndex(sliderRef.current?.swiper.activeIndex)

    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();

        setCurrentIndex(sliderRef.current?.swiper.activeIndex)
        console.log(sliderRef.current?.swiper.activeIndex)
    }, []);


    useEffect(() => {
        updateCards()

        window.addEventListener('resize', updateCards);
        return () => {
            window.removeEventListener('resize', updateCards);
        };
    }, []);

    return (
        <div className='w-full'>
            <div ref={ref} className='mx-3 py-4 sm:mx-10 lg:mx-20 xl:mx-30 2xl:mx-40 flex  items-center justify-between'>
                <h1 className='font-normal text-4xl'>
                    New this week
                </h1>
                <div className='hidden sm:inline-flex items-center space-x-3'>
                    <div onClick={() => {
                        handlePrev()
                    }} className='p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'>
                        <BiChevronLeft className='h-[20px] w-[20px]' color={
                            currentIndex === 0 ? "rgb(241, 241, 241)" : "black"
                        }

                        />
                    </div>
                    <div
                        onClick={() => {
                            handleNext()
                        }}
                        className='p-1 rounded-full border hover:scale-110 transition duration-300 cursor-pointer'>
                        <BiChevronRight className='h-[20px] w-[20px]' color={
                            currentIndex === 5 ? "rgb(241, 241, 241)" : "black"
                        } />
                    </div>

                </div>
            </div>
            <Swiper
                ref={sliderRef}
                slidesPerView={pageRatio}
                className="mySwiper"
                // spaceBetween={0}
                //  width={580+40}
                slidesOffsetBefore={((window.innerWidth - width) / 2) - 30}
                slidesOffsetAfter={(window.innerWidth - width) / 2}
            >

                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}

                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Most popular around the world"}
                        bgUrl={"https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1680"}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}

                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Great for team building"}
                        bgUrl={"https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1680"}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}
                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Fun for the family"}
                        bgUrl={"https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1680"}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}

                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Green for homies"}
                        bgUrl={"https://a0.muscache.com/im/pictures/miso/Hosting-713898202877836679/original/5bd69eb7-e4ae-4615-97b7-440f1658683c.jpeg?im_w=1200"}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}

                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Beaches for friendship"}
                        bgUrl={"https://a0.muscache.com/im/pictures/454d554d-56ad-4877-96a7-db6c97217ec7.jpg?im_w=1200"}
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <CollectionCard
                        ratio={pageRatio === 1.1 ? 0.77 : 1.7}

                        width={(window.innerWidth - ((window.innerWidth - width) / 2)) / pageRatio}
                        title={"Nights for Avcii"}
                        bgUrl={"https://a0.muscache.com/im/pictures/5ca08dcc-88d9-4e8b-b1c5-ff0fde50f03e.jpg?im_w=1200"}
                    />
                </SwiperSlide>










            </Swiper>

            {/* </div> */}


        </div>



    )
}

export default NewCollections