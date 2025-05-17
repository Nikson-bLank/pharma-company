import { FOR_CUSTOMERS_LINKS, OUR_SERVICES_LINKS } from "@/constant/links";
import { OPENING_HOURS } from "@/constant/opening-hours";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-4 grid-cols-1">
                <div className="grid grid-rows-3 gap-4">
                    <h1>Logo</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rem ipsum mollitia aliquam vel quia aperiam sunt
                        error quam delectus vitae.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3> Our Service</h3>
                        <svg
                            width="33"
                            height="7"
                            viewBox="0 0 33 7"
                            fill="none"
                        >
                            <path
                                d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875"
                                stroke="url(#paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                strokeWidth="2"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                    x1="6.14673e-08"
                                    y1="3.71875"
                                    x2="33"
                                    y2="3.71875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#24B7D3"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#30EFAD"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        {OUR_SERVICES_LINKS.map((service) => (
                            <Link key={service.id} href={service.link}>
                                {service.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3> For Customers</h3>
                        <svg
                            width="33"
                            height="7"
                            viewBox="0 0 33 7"
                            fill="none"
                        >
                            <path
                                d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875"
                                stroke="url(#paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                strokeWidth="2"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                    x1="6.14673e-08"
                                    y1="3.71875"
                                    x2="33"
                                    y2="3.71875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#24B7D3"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#30EFAD"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        {FOR_CUSTOMERS_LINKS.map((customer) => (
                            <Link key={customer.id} href={customer.link}>
                                {customer.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3> Opening Hours</h3>
                        <svg
                            width="33"
                            height="7"
                            viewBox="0 0 33 7"
                            fill="none"
                        >
                            <path
                                d="M33 1.71875C29.7 1.71875 29.7 5.71875 26.402 5.71875C23.1 5.71875 23.1 1.71875 19.8 1.71875C16.5 1.71875 16.5 5.71875 13.201 5.71875C9.901 5.71875 9.901 1.71875 6.601 1.71875C3.301 1.71875 3.303 5.71875 0 5.71875"
                                stroke="url(#paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                strokeWidth="2"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_911_44929-pxl_heading-81d736c-1299"
                                    x1="6.14673e-08"
                                    y1="3.71875"
                                    x2="33"
                                    y2="3.71875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#24B7D3"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#30EFAD"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        {OPENING_HOURS.map((opening) => (
                            <span
                                key={opening.id}
                                className="flex justify-between"
                            >
                                <span>{opening.day}</span>
                                <span>{opening.time}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 border border-white">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex justify-between">
                <p></p>
                <div className="flex"></div>
                <div className="flex">Payment Gateways</div>
            </div>
        </div>
    );
}

export default Footer;
