'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function HeroSectionBackground() {
    return (
        <div className="absolute inset-0">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                className="h-full w-full"
            >
                <SwiperSlide>
                    <img
                        src="/spidermanimage.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="/reddeadimage.jpeg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}