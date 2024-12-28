import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { iconService1 } from "@/lib/mediaImport";

type Props = {
    number: string;
    title: string;
    description: string;
};

function ServiceCard({
    number = "01",
    title = "General Diagnostic Testing",
    description = "We are a leading diagnostic service provider. We are team of dedicated professionals...",
}: Props) {
    return (
        <Card className="relative overflow-hidden shadow-lg border-none">
            <CardContent className="py-8 px-9">
                <div className="absolute top-[-28px] right-[-25px] bg-gradient-to-r from-gradient-from to-gradient-to pt-9 px-5 rounded-full size-20">
                    <span className="text-white text-xl font-semibold">
                        {number}
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <div className="flex gap-4 items-center">
                            <Image
                                src={iconService1}
                                height={51}
                                width={50}
                                alt="test"
                            />
                            <h4 className="text-secondary font-semibold text-xl w-3/5">
                                {title}
                            </h4>
                        </div>
                    </div>
                    <div className="h-[1px] border-t w-full"></div>
                    <div>
                        <p className="text-tertiary text-[15px] font-medium">
                            {description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;
