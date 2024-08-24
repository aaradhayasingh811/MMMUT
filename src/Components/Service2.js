import React from 'react'
import a from '../service-img/33.png'
import b from '../service-img/34.png'
import c from '../service-img/35.png'
import d from '../service-img/36.png'
import e from '../service-img/37.png'
import f from '../service-img/38.png'
import g from '../service-img/39.png'
import h from '../service-img/40.png'
import i from '../service-img/41.png'
import j from '../service-img/42.png'
import k from '../service-img/43.png'
import l from '../service-img/44.png'
import m from '../service-img/45.png'
import n from '../service-img/46.png'
import o from '../service-img/47.png'


const Service2 = () => {
  return (
    <div className='m-2 rounded-lg'>
      {/* <div className="but flex text-white  ">
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200  text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>STUDENTS</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>ADMISSION</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 bg-[#f7941d]  font-bold' style={{borderRadius:"10px 10px 0 0"}}>FACULTY</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>MISCELLANEOUS</button>
      </div> */}
      <div className="outer">
      <div className="student grid md:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-1 px-5 py-3 border-2 border-slate-200 mx-auto">
        <div className=" border-2 border-slate-200 boxes" >
            <img src={a} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]'>Grievance Portal </p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={b} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Webmail</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={c} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Downloads </p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={d} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Exam Portal</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={e} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Telephone Directory</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={f} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'> Website Access </p>
        </div>
        <div className=" border-2 border-slate-200 text-wrap boxes">
            <img src={g} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262] '> Account Portal </p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={h} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>  Useful Links</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={i} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>MOTA Award  </p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={j} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>    User Manual Team </p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={k} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>First year Faculty</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={l} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>ECED Faculty List</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={m} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>ERP  Login</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={n} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>  Faculty Seniority List</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={o} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Samarth ERP</p>
        </div>
        {/* <div className="border-2 border-slate-200 boxes">
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

export default Service2
