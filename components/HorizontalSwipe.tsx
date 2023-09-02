import image2 from '../assets/2.jpg';
import Image from "next/image";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from 'swiper/modules';
import { useMediaQuery } from '@/lib/useMediaQuery';

import "swiper/css";
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

function HorizontalSwipe({ images, slug }: { images: string[], slug: string }) {
    const isSmall = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <Swiper
                /* 
                // @ts-ignore */
                slidesPerView={isSmall ? 2 : 5}
                spaceBetween={10}
                scrollbar={{
                    hide: true,
                }}
                freeMode={true}
                modules={[Scrollbar, FreeMode]}
                className="mySwiper w-full h-72 md:h-96"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image} className='flex justify-center items-center relative'>
                            <Image fill src={`/projects/${slug}/portrait/${image}`} className="object-cover md:object-none pointer-events-none" alt="images1" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default HorizontalSwipe