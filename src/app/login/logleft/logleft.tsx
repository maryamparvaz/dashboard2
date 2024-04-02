import React from "react";
import Image from "next/image";
function logleft() {
        return (
                <>
                        <section className="hidden   lg:flex lg:w-[60%] h-[100%] content-between flex-wrap pt-16 ">
                                <figure className="w-full h-[80%]  flex items-end justify-end">
                                        <Image
                                                src="/1.png"
                                                width={600}
                                                height={600}
                                                alt="refresh"
                                        />
                                </figure>
                                <figure className="h-[20%] flex items-center justify-start w-full">
                                        <Image
                                                src="/2.png"
                                                width={200}
                                                height={200}
                                                alt="refresh"
                                        />
                                </figure>
                        </section>
                </>
        );
}

export default logleft;
