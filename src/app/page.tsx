import { QrCodesSection } from "@/components/qrCodesSection";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Intro } from "@/components/intro";
import CustomNav from "@/components/customNav";
import WaitlistSection from "@/components/waitlist";
import Footer from "@/components/footer";

export default function Home() {
  
  return (
    <div className="">
      <CustomNav />
      <main className="flex-grow">
        {/* <HeroSection /> */}
        <div className="flex flex-col md:flex-row items-center justify-around h-screen px-8 mb-10 mt-1 max-w-[100vw]">
          <div id="home" className="md:max-w-[40vw] p-6 rounded-2xl backdrop-blur-md bg-white/10 shadow-xl border border-black/20 dark:border-white/20 hover:scale-105 transition-transform duration-300">
            <Intro
              words={[
                { text: "Build" },
                { text: "better" },
                { text: "future" },
                { text: "with" },
                { text: "Straypay.", className: "text-blue-500 dark:text-blue-500" },
              ]}
            />

          </div>
          <div className="md:w-[40vw] z-15 p-6 rounded-2xl backdrop-blur-md bg-white/10 shadow-xl border border-black/20 dark:border-white/20  text-xl italic hover:scale-105 transition-transform duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            beatae est consectetur laudantium, earum impedit, molestias atque
            fugit quisquam magni culpa laboriosam itaque corporis. Ducimus nulla
            aspernatur pariatur debitis veniam!
          </div>
        </div>

        {/* <QrPaymentSection /> */}
        <div id="qrPayment" className="flex flex-col lg:flex-row h-screen  items-center px-16 max-w-[80vw] mx-auto">
          <div className="mt-30 p-6 w-[50vw] flex flex-col gap-5 z-10">
            <p className="text-2xl sm:text-4xl font-bold">What we Do?</p>
            <p className="text-base sm:text-xl">
              We provide you the best facility for online payments. We work across
              the globe to help customers and sellers get the best prices 💸🌍
            </p>
            <p className="text-base sm:text-xl">
              Scan the QR code to pay with your favorite payment method
            </p>
            <TypewriterEffect words={[
              { text: "And" },
              { text: "Join" },
              { text: "Us.", className: "text-blue-500 dark:text-blue-500" },
            ]} />
          </div>
          <div className="z-10 w-full">
            <QrCodesSection />
          </div>
        </div>
        {/* <WaitlistSection /> */}
        <div id="joinUs" className="flex flex-col h-screen justify-around items-center px-16 xl:max-w-[40vw] lg:max-w-[70vw]  sm:mx-auto mt-90 lg:mt-50 xl:mt-auto ">
          <WaitlistSection />
        </div>
      </main>
      {/* {Footer } */}
      <Footer />
    </div>
  );
}
