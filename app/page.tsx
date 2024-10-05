"use client"

import { useState } from "react";
export default function Unitconverter() {

  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('meters');
  const [toUnit, setToUnit] = useState<string>('kilometers');
  const [result, setResult] = useState<number | null>(null);
   

  const conversionRates: { [key: string]: number } = {
     // Length (relative to meters)
  meters: 1,
  kilometers: 0.001,
  miles: 0.000621371,
  feet: 3.28084,
  inches: 39.3701,
  centimeters: 100,
  millimeters: 1000,
  yards: 1.09361,

  // Weight (relative to kilograms)
  kilograms: 1,
  grams: 1000,
  milligrams: 1_000_000,
  pounds: 2.20462,
  ounces: 35.274,
  tons_metric: 0.001,
  tons_us: 0.00110231,

  // Volume (relative to liters)
  liters: 1,
  milliliters: 1000,
  cubic_meters: 0.001,
  cubic_centimeters: 1000,
  cubic_inches: 61.0237,
  cubic_feet: 0.0353147,
  us_gallons: 0.264172,
  us_quarts: 1.05669,
  };


  const convert = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];
    const convertedValue = (value * toRate) / fromRate;
    setResult(convertedValue);
  };
  const units = Object.keys(conversionRates)
  return (
    <div className="flex justify-center items-center text-center ">
      <div className="bg-black h-[500px] w-[500px] rounded-xlmt-[100px] text-gray-300  mt-[100px]">

        <h1 className="mt-10 text-2xl font-bold">Unit Converter</h1>
        <p className="mt-4">Convert values between different units.</p>


        <div className="flex flex-row mt-5 justify-center items-center gap-x-5">

      
        <select
    value={fromUnit}
    onChange={(e) => setFromUnit(e.target.value)}
    className="w-[200px] p-2 rounded-xl text-black outline-none bg-gray-400"
  >
    {units.map((unit) => (
      <option key={unit} value={unit}>
        {unit.charAt(0).toUpperCase() + unit.slice(1).replace('_', ' ')}
      </option>
    ))}
  </select>
  <select
    value={toUnit}
    onChange={(e) => setToUnit(e.target.value)}
    className="w-[200px] p-2 rounded-xl text-black outline-none bg-gray-400"
  >
    {units.map((unit) => (
      <option key={unit} value={unit}>
        {unit.charAt(0).toUpperCase() + unit.slice(1).replace('_', ' ')}
      </option>
    ))}
  </select>
        </div>

       <div className="flex flex-col mt-10 justify-center text-center items-center ">
      <label>Value</label>
      <input type="number"
      value={value}
      onChange={(e)=>setValue(parseFloat(e.target.value))}
       placeholder="Enter value" 

       className="w-[400px] rounded-xl text-black p-2 mt-2 bg-gray-400"  />
      </div>

        <div className="flex justify-center items-center text-center">
          <button  
          onClick={convert}
        className="flex justify-center items-center text-center w-[400px] bg-gray-400 text-black rounded-xl p-2 mt-10">Convert</button>
        </div>
        
               {/* display div */}
     { result !== null &&( <div className="flex justify-center items-center text-center mt-10">
            <h2 className="text-2xl font-bold">{result.toFixed(2)} {toUnit}</h2>
            <p></p>
         </div> )}

       </div>
       </div>
  )
}
