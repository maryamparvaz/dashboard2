import Image from "next/image";
import Log1 from "./login/log1/log1";
export default function Home() {
  return (
    <main className="w-full flex 2xl:justify-center h-[100vh] overflow-hidden font-Roboto">
      <section className="w-full flex items-start 2xl:container bg-lef">
        <Log1 />
      </section>
    </main>
  );
}
