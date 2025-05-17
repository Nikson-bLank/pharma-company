"use client";

// import PremiumServiceCard from "@/components/cards/PremiumServiceCard";
import ResearchCard from "@/components/cards/ResearchCard";
import PricingCard from "@/components/cards/PricingCard";
// Import Swiper styles
import "swiper/css";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

export default function Home() {
    return (
        <>
            <PricingCard />
            <ResearchCard />
            {/* <PremiumServiceCard /> */}
            <TestimonialCard />
        </>
    );
}
