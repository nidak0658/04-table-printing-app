'use client'

import { useState } from "react";

export default function Home() {

  let [number, setNumber] = useState(0);
  let [table, setTable] = useState([]);
  let [run, setRun] = useState(false);

  function runTable(){
    if(number > 0){
      setRun(true)
      const newTable: any = [];

      for(let i = 1; i <=10; i++){
        newTable.push(`${number} x ${i} = ${number * i}`);
      }
      setTable(newTable)
    }else{
      setRun(false)
    }
  }




  return (
    <div className="flex flex-col pt-6 items-center h-screen bg-purple-700 text-white gap-6">

      <h1 className="lg:text-8xl text-2xl text-slate-300">IB Coding School</h1>

      <h2 className="lg:text-3xl text-xl">Table Printing App</h2>

    {/* table input */}
      <div className="flex flex-col lg:flex-row gap-2">

        <input
        onChange={(e: any)=> setNumber(e.target.value)}
         className="
        text-black
        outline-none
        font-bold
        text-2xl
        py-2
        px-4
        rounded
        bg-slate-300
        " type="number" />

        <button
        onClick={runTable}
         className="bg-blue-800 text-white text-2xl p-2 rounded
        hover:bg-blue-900
        hover:scale-105
        ">Print Table</button>
      </div>


    {/* table output */}
      <div className="h-[50%]">
        {
          run && (
            <ul className="bg-blue-700 py-4 px-10 text-2xl rounded-lg
            flex flex-col gap-2 shadow-md shadow-white
            ">
              {table.map((item, index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>
          )
        }
      </div>
      
    </div>
  );
}