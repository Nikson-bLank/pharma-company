import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaStar } from "react-icons/fa";

type Props = {};

function TestimonialCard({}: Props) {
    return (
        <Card className="border-none shadow-lg p-[30px] rounded-3xl">
            <div className="grid grid-cols-1 gap-y-6">
                <div className="flex gap-4 items-center">
                    <Avatar className="border-2 border-primary size-16" >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h4 className="text-secondary font-bold text-lg">
                            John Doe
                        </h4>
                        <p className="text-primary">NewYork</p>
                    </div>
                </div>
                <p className="text-tertiary text-xs font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem fuga, blanditiis perferendis a iure cumque
                    cupiditate tempore architecto at ratione!
                </p>
                <div className="flex gap-1 items-center">
                    <span>Rating:</span>
                    <div className="flex gap-1 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default TestimonialCard;
