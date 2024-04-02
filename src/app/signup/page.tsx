import Image from "next/image";
import Sign1 from "./sign1/sign1";
export default function Home() {
        return (
                <main className="w-full flex 2xl:justify-center h-[100vh] overflow-hidden">
                        <section className="w-full flex items-start 2xl:container bg-lef">
                                <Sign1/>
                        </section>
                </main>
        );
}