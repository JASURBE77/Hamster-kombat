import React from 'react'
import hamstertanga from '../assets/hamstertanga.svg'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                <h1 className='text-center mt-10 text-2xl font-bold'>Hamster Kombat</h1>
                <div className='flex justify-around mt-[30px]'>
                    <div className='w-[117px]  rounded-xl py-2 bg-[#32363CB2] flex flex-col justify-center items-center gap-[5px]'>
                    <p className='text-[#F79841]'>Earn per tap</p>
                        <div className='flex gap-1'>
                            <img src={hamstertanga} alt="" />
                            <p>+12</p>
                        </div>
                    </div>
                         <div className='w-[127px]  rounded-xl py-2 bg-[#32363CB2] flex flex-col justify-center items-center gap-[5px]'>
                    <p className='text-[#6F72E2]'>Coins to level up</p>
                            <p>10 M</p>
                    </div>
                         <div className='w-[117px]  rounded-xl py-2 bg-[#32363CB2] flex flex-col justify-center items-center gap-[5px]'>
                    <p className='text-[#84CB69]'>Profit per hour</p>
                        <div className='flex gap-1'>
                            <img src={hamstertanga} alt="" />
                            <p>+636</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header