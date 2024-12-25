import React from "react";
import { FaRegClock, FaRegEnvelope, FaRegMap } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

type Props = {};

function Header({}: Props) {
    return (
        <div className="w-full h-14 border-b lg:flex hidden relative">
            <div className="absolute bg-secondary h-14 w-2/5 -z-10 skew-x-[40deg] origin-bottom-left" />
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="hidden sm:flex items-center space-x-4 text-white">
                    <span className="uppercase font-bold hidden xl:block">
                        Book <span className="text-primary">Free</span> Home
                        Collection
                    </span>
                    <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-gradient-from to-gradient-to p-2 rounded-full">
                            <FaPhoneVolume className="text-secondary" />
                        </div>
                        <p className="font-bold">+123 456 7899 90</p>
                    </div>
                </div>
                <div className="h-full flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 ">
                        <FaRegClock className="text-primary text-lg" />
                        <p className="text-sm font-light lg:text-base">
                            Mon - Sat 8.00-18.00, Sun - Closed
                        </p>
                    </div>

                    <div className="flex items-center space-x-1">
                        <FaRegEnvelope className="text-primary text-lg" />
                        <p className="text-sm font-light lg:text-base">
                            Info@Patholab.com
                        </p>
                    </div>

                    <div className="flex items-center space-x-1">
                        {/* Clock Icon */}
                        <FaRegMap className="text-primary text-lg" />
                        <p className="text-sm font-light lg:text-base">
                            183 Marina Avenue, Miami Ci Mall, USA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
