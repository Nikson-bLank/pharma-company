import PremiumServiceCard from "@/components/cards/PremiumServiceCard";
import ServiceCard from "@/components/cards/ServiceCard";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-3 gap-8">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <PremiumServiceCard />
                    <PremiumServiceCard />
                    <PremiumServiceCard />
                    <PremiumServiceCard />
                </div>
            </div>
        </div>
    );
}
