import React from 'react'
import a from '../service-img/48.png'
import b from '../service-img/49.png'
import c from '../service-img/50.png'
import d from '../service-img/51.png'
import e from '../service-img/52.png'
import f from '../service-img/53.png'
import g from '../service-img/54.png'
// import h from '../service-img/55.png'
// import i from '../service-img/56.png'


const Service3 = () => {
  return (
    <div className='m-2 rounded-lg'>
      {/* <div className="but flex text-white  ">
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700  font-bold' style={{borderRadius:"10px 10px 0 0"}}>STUDENTS</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>ADMISSION</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 text-slate-700 font-bold' style={{borderRadius:"10px 10px 0 0"}}>FACULTY</button>
        <button className='p-2 w-1/4 border-2 text-xs md:text-sm border-slate-200 bg-[#f7941d]  font-bold' style={{borderRadius:"10px 10px 0 0"}}>MISCELLANEOUS</button>
      </div> */}
      <div className="outer">
      <div className="student grid md:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-1 px-5 py-3 border-2 border-slate-200 mx-auto">
        <div className=" border-2 border-slate-200 boxes" >
            <img src={a} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]'>TEQIP</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={b} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Vehicle Services</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={c} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Right to Information</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={d} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Press Release</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={e} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Media Coverage</p>
        </div>
        <div className=" border-2 border-slate-200 boxes">
            <img src={f} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>AntiRagging Measures </p>
        </div>
        <div className=" border-2 border-slate-200 text-wrap boxes">
            <img src={g} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262] '>Tender </p>
        </div>
        {/* <div className="border-2 border-slate-200 boxes">
            <img src={h} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Medals and Scholarships</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={i} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Examination Notices</p>
        </div> */}
        {/* <div className="border-2 border-slate-200 boxes">
            <img src={j} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Newsletter and Magazines</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={k} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>E-learning Resources</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={l} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>Downloads</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
            <img src={m} alt="" className='h-15 w-10 mx-auto mt-2' />
            <p className='text-xs text-center my-1 text-[#626262]	'>SB Collect</p>
        </div>
        <div className="border-2 border-slate-200 boxes">
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

export default Service3
