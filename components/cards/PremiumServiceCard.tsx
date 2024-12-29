import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { scientist1 } from "@/lib/mediaImport";
import Link from "next/link";
import { GiSoapExperiment } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

function PremiumServiceCard({}: Props) {
    return (
        <Card className="overflow-hidden shadow-lg border-none">
            <Image
                className="w-full"
                src={scientist1}
                alt="Sunset in the mountains"
            />
            <div className="w-full h-[5px] bg-gradient-to-r from-gradient-from to-gradient-to"></div>
            <div className="p-[30px] grid grid-cols-1 gap-y-4">
                <div className="flex items-center gap-2">
                    <div className="size-14 rounded-full bg-[#e1f6f9] flex justify-center items-center flex-shrink-0">
                        <GiSoapExperiment className="text-4xl text-primary" />
                    </div>
                    <h6 className="font-semibold text-lg text-secondary">
                        Clinical Histopathology Tests
                    </h6>
                </div>
                <p className="text-tertiary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia...
                </p>
                <Link
                    className="text-sm text-tertiary hover:text-link-hover"
                    href={"/"}
                >
                    <span className="flex items-center gap-1 group ">
                        READ MORE
                        <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-500 text-lg" />
                    </span>
                </Link>
            </div>
        </Card>
    );
}

export default PremiumServiceCard;
