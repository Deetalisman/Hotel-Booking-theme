"use client";
import Image from "next/image";
import userimg1 from "./user1.jpg";
import userimg2 from "./user2.jpg";
import userimg3 from "./user3.jpg";
import userimg4 from "./user4.jpg";
import userimg5 from "./user5.jpg";
import mapimg from "./jfk.png";
import { RxHome } from "react-icons/rx";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-[15rem] rounded-3xl">
      <Userdetails />
      <Navlinks />
    </div>
  );
}

function Userdetails() {
  return (
    <div className=" text-center userdetails  rounded-tl-2xl  text-slate-200 p-5 pt-7">
      <div className="flex items-center justify-center">
        <Image
          src={userimg1}
          alt="userimg1"
          width="60"
          className="rounded-full "
        />
      </div>
      <p className="font-semibold mt-2 text-[1rem]">ALEX JOHNSON</p>
      <p className="text-[0.7rem]">alex.johnson@gmail.com</p>
    </div>
  );
}

function Navlinks() {
  return (
    <div className="text-slate-100 rounded-bl-2xl">
      <div>
        <div className="p-2 px-7 navlinks  rounded-br-2xl flex ">
          <RxHome className="text-yellow-600 text-[1.3rem] mr-3 rounded-br-3xl" />
          <p className="text-[0.9rem]">DASHBOARD</p>
        </div>
        <div className="userdetails">
          <div className="p-2  px-3 ml-3  main text-slate-950 flex rounded-l-3xl ">
            <PiAirplaneTakeoffLight className="text-yellow-600 text-[1.3rem] mr-4" />
            <p className="text-[0.9rem]">FLIGHTS</p>
          </div>
        </div>
        <div className="p-2 navlinks px-7 rounded-tr-3xl flex">
          <LiaWalletSolid className="text-yellow-600 text-[1.3rem] mr-4" />
          <p className="text-[0.9rem]">WALLET</p>
        </div>
        <div className="p-2 navlinks  px-7 flex">
          <HiOutlineDocumentReport className="text-yellow-600 text-[1.3rem] mr-4" />
          <p className="text-[0.9rem]">REPORTS</p>
        </div>
        <div className="p-2 navlinks px-7 flex ">
          <AiOutlinePieChart className="text-yellow-600 text-[1.3rem] mr-4" />
          <p className="text-[0.9rem]">STATISTICS</p>
        </div>
        <div className="p-2 navlinks  px-7 flex">
          <IoSettingsOutline className="text-yellow-600 text-[1.3rem] mr-4" />
          <p className="text-[0.9rem]">SETTINGS</p>
        </div>
      </div>
      <div className="navlinks p-4 rounded-bl-2xl">
        <p className="text-yellow-500 text-[0.8rem]">ACTIVE USERS</p>
        <div className="flex relative mt-2">
          <Image
            src={userimg2}
            alt="userimg2"
            width="40"
            height="20"
            className="mt-0 rounded-full h-9"
          />
          <Image
            src={userimg3}
            alt="userimg3"
            width="40"
            height="20"
            className="mt-0 rounded-full h-10 absolute left-7 border-2 border-slate-500"
          />
          <Image
            src={userimg4}
            alt="userimg4"
            width="40"
            height="20"
            className="mt-0 rounded-full h-10 absolute left-14 border-2 border-slate-500"
          />
          <Image
            src={userimg5}
            alt="userimg5"
            width="40"
            height="20"
            className="mt-0 rounded-full h-10 absolute left-[5rem] border-2 border-slate-500 "
          />
          <div className="mt-0 bg-yellow-500 p-2 rounded-full absolute left-[6.7rem] border-2 border-slate-500">
            <p className="text-white font-semibold">+70</p>
          </div>
        </div>
        <Image
          src={mapimg}
          className="mt-4 rounded-lg h-[6rem] "
          width="180"
          alt="map1"
          height="40"
        />
      </div>
    </div>
  );
}

export default Navbar;
