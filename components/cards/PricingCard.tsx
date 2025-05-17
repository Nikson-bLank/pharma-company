import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {};

const FEATURES = [
    { id: 1, label: "Series Blood Tests" },
    { id: 2, label: "Bone Health Check" },
    { id: 3, label: "Lipid Profile" },
    { id: 4, label: "Abdomen Ultrasound" },
];

function PricingCard({}: Props) {
    return (
        <Card className="w-[380px] px-6 py-12 relative">
            <div className=""></div>
            <div className="flex flex-col gap-6">
                <h4 className="text-center font-semibold text-2xl text-secondary">
                    {"Medicare Package 1"}
                </h4>
                <p className="text-center text-tertiary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, porro.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <span className="self-start text-secondary font-bold text-xl">
                        $
                    </span>
                    <h2 className="font-bold text-3xl text-secondary">199</h2>
                    <p className="text-blue-400 text-sm">/ PER PERSON</p>
                </div>

                <ul>
                    {FEATURES.map((feature, index) => (
                        <li
                            key={feature.id}
                            className={cn("text-center py-2.5 text-tertiary", {
                                "border-b border-[#d2dbe8]":
                                    FEATURES.length !== index + 1,
                            })}
                        >
                            Basic Heart Checkup
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

export default PricingCard;
