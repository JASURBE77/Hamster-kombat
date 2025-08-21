import React from 'react'
import { Link } from 'react-router-dom'
import { SiExpertsexchange } from "react-icons/si";
import { ImHammer } from "react-icons/im";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import hamsterdrop from '../assets/airdrop.png'

const Footer = () => {
  return (
    <div className='flex gap-1 bg-[#32363CB2] items-center justify-around fixed  bottom-0 w-full py-2'>
       <Link className='w-[80px] h-[60px]  focus:bg-[#21242980] rounded-xl focus:text-[#F4B92E] flex focus:transition-[300ms] transition-[300ms]  flex-col gap-1.5 justify-center items-center' to={"/"}> <SiExpertsexchange className='hover:text-yellow-400' /> <span className='text-white'>Exchange</span></Link>
       <Link className='w-[80px] h-[60px]  focus:bg-[#21242980] rounded-xl focus:text-[#F4B92E] flex focus:transition-[300ms] transition-[300ms]  flex-col gap-1.5 justify-center items-center' to={"/mine"} ><ImHammer /> <span className='text-white'>Mine</span></Link>
       <Link className='w-[80px] h-[60px]  focus:bg-[#21242980] rounded-xl focus:text-[#F4B92E] flex focus:transition-[300ms] transition-[300ms]  flex-col gap-1.5 justify-center items-center' to={"/friends"}><FaUsers />  <span className='text-white'>Friends</span></Link>
       <Link className='w-[80px] h-[60px]  focus:bg-[#21242980] rounded-xl focus:text-[#F4B92E] flex focus:transition-[300ms] transition-[300ms]  flex-col gap-1.5 justify-center items-center' to={"/earn"}> <BsDatabaseFillCheck />  <span className='text-white'>Earn</span></Link>
       <Link className='w-[80px] h-[60px]  focus:bg-[#21242980] rounded-xl focus:text-[#F4B92E] flex focus:transition-[300ms] transition-[300ms]  flex-col gap-1.5 justify-center items-center' to={"/airdrop"}>  <img src={hamsterdrop} alt="" /> <span className='text-white'>Airdrop</span></Link>
    </div>
  )
}

export default Footer