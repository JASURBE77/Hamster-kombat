    import React, { createContext, useState } from 'react'
    import hamstertanga from '../assets/hamstertanga.svg'
    import hamstergaday from '../assets/hamstergaday.png'
    import { getItem } from 'localforage'
    import quvvat from '../assets/quvvat.png'

    export const Hamstermoney = createContext()
    const Home = () => {
        const [count , setcount] = useState(Number(localStorage.getItem("money")) || 0)
        const database = localStorage.setItem("money" , count)

    return (
        <>
      <Hamstermoney.Provider value={count}>
          <h1 className='flex items-center text-4xl justify-center mt-[30px]'><img className='w-[42px] h-[42px]' src={hamstertanga} alt="" />{count}</h1>
        <center>
            <button onClick={() => setcount(count + 1)}>
        <img className='mt-[30px] active:scale-90 transition-[300ms]'  src={hamstergaday} alt="" />
            </button>   
        </center>
      </Hamstermoney.Provider>
        <div className='flex justify-around'>
            <div className='flex gap-2 items-center'>
                <img src={quvvat} alt="" />
                <p>6500 / 6500</p>
            </div>
            <p>Boost</p>
        </div>
        </>
    )
    }

    export default Home