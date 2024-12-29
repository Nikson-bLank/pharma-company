"use client";

import PremiumServiceCard from "@/components/cards/PremiumServiceCard";
import ResearchCard from "@/components/cards/ResearchCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <Swiper className="mySwiper" slidesPerView={3} spaceBetween={50}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto my-10">
                <Swiper slidesPerView={4} loop spaceBetween={10}>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumServiceCard />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="max-w-screen-xl mx-auto my-10">
                <Swiper slidesPerView={4} loop spaceBetween={10}>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResearchCard />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="max-w-screen-xl mx-auto my-10">
                <Swiper slidesPerView={4} loop spaceBetween={10}>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                </Swiper>
            </div>
          
            <div className="max-w-screen-xl mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <ResearchCard />
                    <ResearchCard />
                    <ResearchCard />
                    <ResearchCard />
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </div>
    );
}
