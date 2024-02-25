import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import emirates from "./emirate.png";
import qatar from "./qatarr.png";
import mapimg2 from "./image2.jpeg";
import { SiLufthansa } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
export default function Home() {
  return (
    <main className="p-5 ml-5">
      <Flightdetails />
      <Searchresult />
    </main>
  );
}
function Flightdetails() {
  return (
    <div className="bg-white p-5 rounded-2xl w-[48rem] text-[0.9rem]">
      <div className="flex justify-between ">
        <aside className="flex justify-between w-[24rem] main py-1 px-4 rounded-2xl">
          <small className="flex mt-2">
            <FaLocationDot className="text-[0.8rem] mr-3" />
            <p>NEW YORK (JFK)</p>
          </small>
          <small className="userdetails pt-2 px-2 rounded-full">
            <FaExchangeAlt className="text-white text-[1rem]" />
          </small>
          <small className="flex mt-2">
            <FaLocationDot className="text-[0.8rem] mr-3" />
            <p>MUMBAI (BOM)</p>
          </small>
        </aside>
        <aside className="flex main p-2 px-4  w-[10rem] rounded-2xl">
          {/* <p className="text-[0.8rem]">29 JULY 2019</p> */}
          <input type="date" className="bg-transparent" />
        </aside>
        <aside className="flex main py-2 px-4  w-[9rem]  rounded-2xl">
          <FaUserAlt className="text-[0.8rem] mr-3 mt-1" />
          <p className="text-[0.8rem]">2 TRAVELLER</p>
        </aside>
      </div>
      <div className="flex justify-between mt-3">
        <aside className="flex justify-between w-[24rem]  p-[2px] main  rounded-2xl">
          <small className="navlinks text-white p-2 px-9 rounded-full">
            <p>ONE WAY</p>
          </small>
          <small className="p-2">
            <p>ROUND TRIP</p>
          </small>
          <small className="p-2 mr-2">
            <p>MULTI CITY</p>
          </small>
        </aside>
        <aside className="flex main pt-2 px-4  w-[10rem] rounded-2xl">
          <MdChair className="text-[0.9rem] mr-3 mt-1" />
          <p>FIRST CLASS</p>
        </aside>
        <aside className=" bg-yellow-500 py-2 text-center  w-[9rem] rounded-2xl">
          <p className="text-[0.8rem] text-white">SEARCH</p>
        </aside>
      </div>
    </div>
  );
}

function Searchresult() {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <p className="font-semibold">RESULT (25)</p>
        <small className="flex">
          <div className="bg-white text-center w-[5rem] pt-2 py-1 rounded-full mr-2">
            <p className="text-[0.7rem]">FILTER</p>
          </div>
          <div className="bg-white flex text-center w-[9rem] pl-4 p-2 rounded-full">
            <p className="text-[0.7rem]">TICKET OF CLASS</p>
            <IoIosArrowDown className="mt-1 ml-2" />
          </div>
        </small>
      </div>
      <div className="flex">
        <Resultlist />
        <Flightmap />
      </div>
    </div>
  );
}

function Resultlist() {
  return (
    <div className="bg-white w-[66%] mt-4 rounded-xl">
      <div className="p-3 relative py-4 flex justify-between border-b-2 border-gray-400">
        <Image
          src={emirates}
          width="50"
          height="40"
          alt="emirate"
          className="h-[2.8rem]"
        />
        <small className="ml-5">
          <p className="text-[1.2rem] font-semibold">JFK</p>
          <p className="text-[0.7rem] mt-1">13:00</p>
        </small>
        <small className="text-center mt-1">
          <p className="text-[0.5rem]">EMIRATES</p>
          <p className="text-[0.7rem] text-yellow-600">11H 20M</p>
          <p className="text-[0.7rem]">NON-STOP</p>
        </small>
        <small>
          <p className="text-[1rem] font-semibold">BOM</p>
          <p className="text-[0.7rem] text-right mt-2">14:20</p>
        </small>
        <small>
          <p className="text-[0.8rem] text-right font-semibold">$1,572</p>
          <div className="bg-yellow-500 text-center w-[6rem] p-1 mt-2 rounded-full">
            <p className="text-white text-[0.7rem]">BOOK NOW</p>
          </div>
        </small>
        <aside className="main pseud absolute w-[2rem] h-[2rem] rounded-full"></aside>
        <aside className="main pseudd absolute w-[2rem] h-[2rem] rounded-full"></aside>
      </div>
      <div className="p-3 py-4 relative flex justify-between border-b-2 border-gray-400">
        <Image
          src={qatar}
          width="70"
          height="40"
          alt="emirate"
          className="h-[3rem]"
        />
        <small>
          <p className="text-[1.2rem] font-semibold">JFK</p>
          <p className="text-[0.7rem] mt-1">13:00</p>
        </small>
        <small className="text-center mt-1">
          <p className="text-[0.5rem]">QATAR AIRWAYS</p>
          <p className="text-[0.7rem] text-yellow-600">11H 20M</p>
          <p className="text-[0.7rem]">NON-STOP</p>
        </small>
        <small>
          <p className="text-[1rem] font-semibold">BOM</p>
          <p className="text-[0.7rem] text-right mt-2">14:20</p>
        </small>
        <small>
          <p className="text-[0.8rem] text-right font-semibold">$2,072</p>
          <div className="bg-yellow-500 text-center w-[6rem] p-1 mt-2 rounded-full">
            <p className="text-white text-[0.7rem]">BOOK NOW</p>
          </div>
        </small>
        <aside className="main pseud absolute w-[2rem] h-[2rem] rounded-full"></aside>
        <aside className="main pseudd absolute w-[2rem] h-[2rem] rounded-full"></aside>
      </div>
      <div className="p-3 py-4 relative flex justify-between border-b-2 border-gray-400">
        <small className="text-center">
          <SiLufthansa className="text-[2rem] text-center" />
          <p className="font-semibold">LUFTHANSA</p>
        </small>
        <small>
          <p className="text-[1.2rem] font-semibold">JFK</p>
          <p className="text-[0.7rem] mt-1">13:00</p>
        </small>
        <small className="text-center mt-1">
          <p className="text-[0.5rem]">LUFTHANSA</p>
          <p className="text-[0.7rem] text-yellow-600">11H 20M</p>
          <p className="text-[0.7rem]">NON-STOP</p>
        </small>
        <small>
          <p className="text-[1rem] font-semibold">BOM</p>
          <p className="text-[0.7rem] text-right mt-2">14:20</p>
        </small>
        <small>
          <p className="text-[0.8rem] text-right font-semibold">$1,872</p>
          <div className="bg-yellow-500 text-center w-[6rem] p-1 mt-2 rounded-full">
            <p className="text-white text-[0.7rem]">BOOK NOW</p>
          </div>
        </small>
        <aside className="main pseud absolute w-[2rem] h-[2rem] rounded-full"></aside>
        <aside className="main pseudd absolute w-[2rem] h-[2rem] rounded-full"></aside>
      </div>
      <div className="p-3 py-4 relative flex justify-between">
        <Image
          src={emirates}
          width="50"
          height="40"
          alt="emirate"
          className="h-[2.8rem]"
        />
        <small className="ml-5">
          <p className="text-[1.2rem] font-semibold">JFK</p>
          <p className="text-[0.7rem] mt-1">13:00</p>
        </small>
        <small className="text-center mt-1">
          <p className="text-[0.5rem]">EMIRATES</p>
          <p className="text-[0.7rem] text-yellow-600">11H 20M</p>
          <p className="text-[0.7rem]">NON-STOP</p>
        </small>
        <small>
          <p className="text-[1rem] font-semibold">BOM</p>
          <p className="text-[0.7rem] text-right mt-2">14:20</p>
        </small>
        <small>
          <p className="text-[0.8rem] text-right font-semibold">$1,872</p>
          <div className="bg-yellow-500 text-center w-[6rem] p-1 mt-2 rounded-full">
            <p className="text-white text-[0.7rem]">BOOK NOW</p>
          </div>
        </small>
      </div>
    </div>
  );
}

function Flightmap() {
  return (
    <div className="ml-5 mt-4 userdetails rounded-2xl w-[35%]">
      <main className=" text-white p-5 navlinks rounded-t-2xl">
        <div className="flex justify-between">
          <small>
            <p className="text-[0.7rem]">FROM</p>
            <p className="text-[1.2rem] font-semibold">JFK</p>
          </small>
          <small>
            <p className="mt-6 text-[0.7rem]">NON-STOP</p>
          </small>
          <small>
            <p className="text-[0.7rem]">TO</p>
            <p className="text-[1.2rem] font-semibold">BOM</p>
          </small>
        </div>
        <Image
          src={mapimg2}
          width="100"
          alt="mapimg2"
          className="h-[8rem] w-[100%] rounded-xl mt-2"
        />
      </main>
      <main className="text-white p-3 text-[0.7rem]">
        <aside className="flex justify-between   p-[2px]   rounded-2xl">
          <small className="bg-yellow-500 text-white p-2 px-2 rounded-full">
            <p>NON STOP</p>
          </small>
          <small className="pt-2">
            <p>ONE STOP</p>
          </small>
          <small className="pt-2">
            <p>MORE STOP</p>
          </small>
        </aside>
        <aside className="mt-2">
          <p>PRICE</p>
          <div className="border-t-2 mt-2 relative border-gray-300 w-[100%]">
            <div className="bg-yellow-500 absolute pricetag w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 w-9 absolute left-9 rounded-full p-1">
              <p>$500</p>
            </div>
            <div className="bg-yellow-500 w-10 absolute right-8 rounded-full p-1">
              <p>$2500</p>
            </div>
            <div className="bg-yellow-500 absolute pricetag1 w-3 h-3 rounded-full"></div>
          </div>
        </aside>
      </main>
    </div>
  );
}
