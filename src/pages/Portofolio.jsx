import { useState } from "react";
import PortoCard from "../Components/PortoCard";

export default function Portofolio() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);
  const image = ["/bunga.jpg", "/fotbar.jpg", "gojo.jpg"];
  const portoGambar = [
    "/React-Pertamaku/fotbar.jpg"
  ];

  return (
    <div>
      <header className="px-8 md:px-20 py-6 bg-sky-300 bg-opacity-70 backdrop-blur fixed w-full z-50">
        <nav className="flex justify-between">
          <div className="text-2xl font-teko hover:text-sky-700 select-none">
            PHLX
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-12">
              <li>
                <a
                  className="py-4 px-6 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-4 px-6 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#portofolio"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  className="py-4 px-6 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="py-4 px-6 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                viewBox="0 0 448 512"
                className={show ? "hidden" : ""}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                viewBox="0 0 384 512"
                className={show ? "" : "hidden"}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </nav>
        <div className={"absolute right-16 " + (show ? "" : "hidden")}>
          <ul className="rounded-lg bg-white">
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#home">Home</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#portofolio">Portofolio</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <section className="pt-20 pb-12" id="home">
        <div className="grid grid-cols-12">
          <div className="space-y-4 col-span-12 md:col-span-6 flex flex-col justify-center px-8 md:px-20">
            <p className="text-xl">Hi, I'm</p>
            <h1 className="text-3xl md:text-6xl font-bold">
              Akbar Ghazali
              <span className="text-sky-500">Ali Sappa</span>
            </h1>
            <p className="text-xl">
              I'm a <span className="text-sky-500">SIMP</span>
            </p>
            <div className="flex items-center justify-center text-gray-500  mb-4 gap-4">
              <a
                href="https://www.facebook.com/akbar.alghazali.73?mibextid=ZbWKwL"
                target="_blank"
                className="w-7 h-7 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/akbar.gzl?igshid=ZGNjOWZkYTE3MQ=="
                target="_blank"
                className="w-8 h-8 hover:text-purple-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/akbar-al-ghazali-bb453a274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="w-8 h-8 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a href target="_blank" className="w-8 h-8 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
          </div>
          <div className=" col-span-12 -order-1 md:order-1 md:col-span-6 p-20 md:p-28 ">
            <div className="rounded-full  overflow-hidden w-fit">
              <img src="/React-Pertamaku/bunga.jpg" alt='{""}/' />
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="portofolio">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            Portofolio
          </h2>
          <div className="w-full h-1 bg-sky-500 my-4" />
        </div>
        <div className=" grid grid-cols-12 gap-6 ">
        <PortoCard gambar={ portoGambar[0] } title="Web Design" description="random text"/>

        </div>
      </section>
      <section className="p-12 md:p-20" id="skills">
        <div className>
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            My Skills
          </h2>
          <div className="w-1/12 h-2 bg-green-500 my-4" />
        </div>
        <div className=" grid grid-cols-12 gap-4 ">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div></div>
            <div className="p-6 text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="fill-orange-500 w-20 h-20"
                >
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">HTML5</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div></div>
            <div className="p-6 text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="fill-blue-500 w-20 h-20"
                >
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">CSS</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div></div>
            <div className="p-6 text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-20 h-20"
                >
                  <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">Python</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div></div>
            <div className="p-6 text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-20 h20 fill-yellow-400"
                >
                  <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold">JS</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="contact">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-white text-center pb-10">
            <h1 className="text-3xl font-bold">Contact Me</h1>
          </div>
          <div className="rounded-2xl overflow-hidden border-white border-[3px] hover:scale-105">
            <a
              href="https://wa.me/6282199505873"
              target="_blank"
              className="bg-[#11B517] flex items-center gap-6 py-3 px-3 text-white 
  text-2xl font-semibold  
  hover:bg-[#36a93a]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={60}
                width={60}
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <p className="hidden sm:block">Contact Me On WhatsApp</p>
            </a>
          </div>
        </div>
      </section>
      <footer className="p-4 md:p-8 bg-slate-900">
        <div className="flex items-center justify-center text-white mb-4 gap-4">
          <a
            href="https://www.facebook.com/akbar.alghazali.73?mibextid=ZbWKwL"
            target="_blank"
            className="w-7 h-7 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current w-full h-full"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/akbar.gzl?igshid=ZGNjOWZkYTE3MQ=="
            target="_blank"
            className="w-8 h-8 hover:text-purple-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current w-full h-full"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/akbar-al-ghazali-bb453a274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="w-8 h-8 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current w-full h-full"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a href target="_blank" className="w-8 h-8 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current w-full h-full"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
        </div>
        <p className="text-center text-white">
          Copyright © 2023 - All rigths reserved <br />
          Made by PHLX
        </p>
      </footer>
      {"{"}/* {/* Back to Top Button */} */{"}"}
      <a
        href="#home"
        className="fixed bottom-10 right-10 p-4 rounded-full bg-white bg-opacity-70 backdrop-blur"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          width={24}
          viewBox="0 0 512 512"
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </a>
    </div>
  );
}
