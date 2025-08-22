  import React, { useContext, useState ,useEffect} from 'react'
    import hamstertanga from '../assets/hamstertanga.svg'
import excluede from '../assets/Exclude.png'
import coin from '../assets/hamstertanga.svg'
import meme from '../assets/meme.png'
import x10 from '../assets/x10.png'
  const Mine = () => {
    const [money , setmoney] = useState(localStorage.getItem('money'))
    const [hidden , sethidden] = useState(false)
    console.log(money);
      useEffect(() => {
    localStorage.setItem('money', money)
  }, [money])
    return (
      <>
          <h1 className='flex items-center text-4xl justify-center mt-[30px]'><img className='w-[42px] h-[42px]' src={hamstertanga} alt="" />{money}</h1>
      <div className='flex  justify-center items-center gap-5 mt-5 flex-col'>
          <div  className='w-[319px] rounded-2xl px-5 py-2 bg-[#32363C]'onClick={() => money >= 190 ? setmoney(money - 190) : alert(`siznin mablag'ingizda coin yetarli emas`)} >
            <div className='flex items-center border-b gap-7 mb-2  border-gray-500 pl-6 h-[106px]'>
              <img src={excluede} alt="" />
              <div className='flex flex-col gap-1'>
                <p>Тоp 10 cmc pairs</p>
                <p className='text-gray-500'>Profit per hour</p>
                <div className='flex items-center gap2'>
                  <img src={hamstertanga} alt="" />
                  <p>120</p>
                </div>
              </div>
              <button dis></button>
            </div>
            <div className='flex gap-10 pl-5'>
              <p className='border-r border-gray-500 w-15'>lvl 1</p>
              <div className='flex items-center gap-2'>
                <img className='w-[26px]' src={hamstertanga} alt="" />
                <p>192</p>
              </div>
            </div>
          </div>
           <div className='w-[319px] rounded-2xl px-5 py-2 bg-[#32363C]'>
            <div className='flex items-center border-b gap-7 mb-2  border-gray-500 pl-6 h-[106px]'>
              <img src={meme} alt="" />
              <div className='flex flex-col gap-1'>
                <p>Mene coins</p>
                <p className='text-gray-500'>Profit per hour</p>
                <div className='flex items-center gap2'>
                  <img src={hamstertanga} alt="" />
                  <p>376</p>
                </div>
              </div>
            </div>
            <div className='flex gap-10 pl-5'>
              <p className='border-r border-gray-500 w-15'>lvl 1</p>
              <div className='flex items-center gap-2'>
                <img className='w-[26px]' src={hamstertanga} alt="" />
                <p>2.3k</p>
              </div>
            </div>
          </div>
           <div className='w-[319px] rounded-2xl px-5 py-2 bg-[#32363C]'>
            <div className='flex items-center border-b gap-7 mb-2  border-gray-500 pl-6 h-[106px]'>
              <img src={x10} alt="" />
              <div className='flex flex-col gap-1'>
                <p>Margin trading x10</p>
                <p className='text-gray-500'>Profit per hour</p>
                <div className='flex items-center gap2'>
                  <img src={hamstertanga} alt="" />
                  <p>997</p>
                </div>
              </div>
            </div>
            <div className='flex gap-10 pl-5'>
              <p className='border-r border-gray-500 w-15'>lvl 1</p>
              <div className='flex items-center gap-2'>
                <img className='w-[26px]' src={hamstertanga} alt="" />
                <p>11.2k</p>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }

  export default Mine