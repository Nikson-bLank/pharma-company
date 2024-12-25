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
        </div>
    );
}
