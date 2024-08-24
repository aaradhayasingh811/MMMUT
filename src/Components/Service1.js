import React from 'react'
import a from '../service-img/20.png'
import b from '../service-img/21.png'
import c from '../service-img/22.png'
import d from '../service-img/23.png'
import e from '../service-img/24.png'
import f from '../service-img/25.png'
import g from '../service-img/26.png'
import h from '../service-img/27.png'
import i from '../service-img/28.png'
import j from '../service-img/29.png'
import k from '../service-img/30.png'
import l from '../service-img/31.png'
import m from '../service-img/32.png'


const Service1 = () => {
  return (
    <div className='m-2 rounded-lg'>
      {/* <div className="but flex text-white  ">
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700   font-bold' style={{borderRadius:"10px 10px 0 0"}}>STUDENTS</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 bg-[#f7941d]font-bold' style={{borderRadius:"10px 10px 0 0"}}>ADMISSION</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>FACULTY</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>MISCELLANEOUS</button>
      </div> */}
      <div className="outer">
      <div className="student grid md:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-1 px-5 py-3 border-2 border-slate-200 mx-auto">
        <div className=" border-2 border-slate-200 boxes" >
            <img src={a} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]'>Postgraduate Admissions</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={b} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>  Undergraduate Admissions</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={c} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'> Ph.D. Admission 2024-25 (July Session)</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={d} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>JEE Main-2024</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={e} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'> JEE Other State</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={f} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Admission Brochure </p>
        </div>
        <div className=" border-2 border-slate-200 text-wrap boxes">
            <img src={g} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262] '> Admission Statistics </p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={h} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Information Brochure</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={i} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'> Online Counselling</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={j} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>CUET (UG)-2024</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={k} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>CUET (PG)-2024</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={l} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>M.Tech. through GATE 2024</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={m} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>International Admission</p>
        </div>
        {/* <div className="border-2 border-slate-200 boxes">
            <img src={n} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Chatra Kalyan Nidhi</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={o} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Grivenance Portal</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={p} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Samarth ERP</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={q} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Digilocker NAD/ABC</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={r} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Awarded Students</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={s} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Online & Distance</p>
        </div> */}
        </div>
       
      </div>
    </div>
  )
}

export default Service1
