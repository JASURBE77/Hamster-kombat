    import React, { useState } from 'react'
    import hamstertanga from '../assets/hamstertanga.svg'
    import hamstergaday from '../assets/hamstergaday.png'
    import { getItem } from 'localforage'
    import quvvat from '../assets/quvvat.png'

    const Home = () => {
        const [count , setcount] = useState(Number(localStorage.getItem("money")) || 0)
        const database = localStorage.setItem("money" , count)

    return (
        <>
          <h1 className='flex items-center text-4xl justify-center mt-[30px]'><img className='w-[42px] h-[42px]' src={hamstertanga} alt="" />{count}</h1>
        <center>
            <button onClick={() => setcount(count + 1)}>
        <img className='mt-[60px] active:scale-90 transition-[300ms]'  src={hamstergaday} alt="" />
            </button>   
        </center>
        <div className='flex justify-around mt-5'>
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