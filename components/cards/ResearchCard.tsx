import { scientist1 } from "@/lib/mediaImport";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { Card } from "../ui/card";

function ResearchCard() {
    return (
        <Card className="p-5 border-[#f2f5ff] shadow-none rounded-[17px]">
            <div className="w-full rounded-[12px] relative overflow-hidden group">
                <Image
                    className="w-full rounded-[12px] group-hover:scale-125 -z-10 transition-all duration-500 ease-in-out"
                    src={scientist1}
                    alt="Sunset in the mountains"
                />
                <div className="absolute bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-2.5 top-0 right-0 rounded-bl-[12px] z-10">
                    <span className="text-white">DECEMBER 29, 2024</span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-2 border-b border-[#f2f5ff] -mx-5 pb-4 pt-3 px-5">
                    <span className="flex gap-1  items-center text-sm text-tertiary">
                        <AiOutlineUser />
                        John Doe
                    </span>
                    <div className="bg-quaternary size-1 rounded"></div>
                    <span className=" text-sm text-tertiary">0 comments</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center items-center font-medium p-4 bg-[#e1f6f9] rounded-full cursor-pointer">
                        <div className="text-sm font-normal leading-none max-w-full flex-initial text-tertiary hover:text-primary">
                            AI Science
                        </div>
                    </div>
                    <div className="flex justify-center items-center font-medium p-4 bg-[#e1f6f9] rounded-full cursor-pointer">
                        <div className="text-sm font-normal leading-none max-w-full flex-initial text-tertiary hover:text-primary">
                            Scientific
                        </div>
                    </div>
                </div>
                <h3 className="text-secondary text-xl font-semibold">
                    Lorem ipsum dolor
                </h3>
                <Link
                    className="text-sm text-tertiary hover:text-link-hover"
                    href={"/"}
                >
                    <span className="flex items-center gap-1 group font-medium ">
                        READ MORE
                        <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-500 text-lg" />
                    </span>
                </Link>
            </div>
        </Card>
    );
}

export default ResearchCard;
