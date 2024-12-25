import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa6";
import { Button } from "../ui/button";

type Props = {};

function Navbar({}: Props) {
    return (
        <div className="w-full h-24 shadow-sm">
            <div className="h-full container mx-auto flex">
                <div className="flex items-center w-1/3">
                    <Link href={"/"}>
                        <h1 className="text-4xl font-bold">Logo</h1>
                    </Link>
                </div>
                <div className="flex-1 h-full">
                    <div className="flex justify-end items-center h-full gap-4">
                        <ul className="flex gap-4">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Services</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Packages</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Blogs</Link>
                            </li>
                        </ul>
                        <div className="flex items-center divide-x-2">
                            <div className="px-2 flex gap-4">
                                <a href="" className="">
                                    <span className="size-10 rounded-full bg-slate-200 flex items-center justify-center group hover:bg-primary transition-all ease-in-out duration-300 delay-100">
                                        <FaFacebookF className="text-secondary group-hover:text-white transition-all ease-in-out  duration-300" />
                                    </span>
                                </a>
                                <a href="">
                                    <span className="size-10 rounded-full bg-slate-200 flex items-center justify-center group hover:bg-primary transition-all ease-in-out duration-300 delay-100">
                                        <FaTwitter className="text-secondary group-hover:text-white transition-all ease-in-out  duration-300" />
                                    </span>
                                </a>
                                <a href="">
                                    <span className="size-10 rounded-full bg-slate-200 flex items-center justify-center group hover:bg-primary transition-all ease-in-out duration-300 delay-100">
                                        <FaInstagram className="text-secondary group-hover:text-white transition-all ease-in-out  duration-300" />
                                    </span>
                                </a>
                                <a href="">
                                    <span className="size-10 rounded-full bg-slate-200 flex items-center justify-center group hover:bg-primary transition-all ease-in-out duration-300 delay-100">
                                        <FaPinterestP className="text-secondary group-hover:text-white transition-all ease-in-out  duration-300" />
                                    </span>
                                </a>
                            </div>

                            <div className="px-2">
                                {/* <button className=" hover: bg-gradient-to-r from-gradient-from to-gradient-to">
                                    Make Appointment
                                </button> */}
                                <Button>Make Appointment</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
