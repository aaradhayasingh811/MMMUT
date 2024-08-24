import React from 'react'
import gana1 from '../Images/FINALKULGEET.mp3'
import gana2 from '../Images/MMMUT-KULGEET-DHUN-2min.mp3'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="text-white bg-[#222222]">
    <div className='text-white grid justify-items-center md:grid-cols-2 lg:grid-cols-4 bg-[#222222] p-16 gap-4'>
      <div className="flex flex-col text-xs leading-5 w-full">
        <h1 className='text-amber-700 text-xl font-bold'> CONTACT US</h1>
        <p>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY,</p>
        <p>Gorakhpur</p>
        <p>Phone: +91-551-2273958, +91-8765783730        </p>
        <p>Fax: 0551-2270011        </p>
        <p>P.A. to Vice-Chancellor: Sri Pradeep Kant Singh        </p>
        <p>Phone:+91-9235500502(during office hours)        </p>
        <p>Email: patovc@mmmut.ac.in        </p>
        <p>Phone(Information-Cum-Reception Center): 8765783796        </p>
        <p>Admission Enquiry: 9235500507, 8765783798        </p>
        <p>(On all working days between 9:30 am to 5:00 pm)</p>

        <div className="flex gap-4 my-4 footer-link-social-link">
            <h1 className='text-amber-700 text-xl font-bold '>Get In Touch :</h1>
            <a href=""><FacebookRoundedIcon /></a>
            <a href=""><TwitterIcon /></a>
            <a href=""><LinkedInIcon /></a>
            <a href=""><YouTubeIcon /></a>
        </div>
      </div>
      <div className="flex flex-col text-base leading-9 w-full footer-link">
        <h1 className='text-amber-700 text-xl font-bold'>Media</h1>
        <a href="">Photo Gallery</a>
        <a href="">Video Gallery</a>
        <a href="">Media Coverage</a>
        <div className="">
        <a>Kulgeet-abridged</a>
        <audio controls className='h-4 w-10/12'>
        <source src={gana1} type="audio/mpeg" />
        </audio>
        </div>
        <div className="">
            <a>Kulgeet-abridged-Dhun</a>
            <audio controls className='h-4 w-10/12'>
             <source src={gana2} type="audio/mpeg" />
             </audio>
        </div>
        
      </div>
      <div className="flex flex-col text-base leading-9 w-full footer-link">
        <h1 className='text-amber-700 text-xl font-bold'>Important Links</h1>
        <a href="">Tender</a>
        <a href="">NIRF</a>
        <a href="">Useful Links</a>
        <a href="">Right to Information</a>
        <a href="">Raj Bhawan, UP</a>
        <a href="">Caste Discrimination Complaint</a>
        <a href="">AICTE Mandatory Disclosure</a>
      </div>
      <div className="flex flex-col text-base leading-9 w-full footer-link">
        <h1 className='text-amber-700 text-xl font-bold'
        >Quick Links</h1>
        <a href="">Important Cells</a>
        <a href="">Webmail</a>
        <a href="">Invitation for Donations</a>
        <a href="">Spoken Tutorial IIT Bombay</a>
        <a href="">NPTEL Video Courses</a>
      </div>
      
    </div>
    <div className="border-b-2 w-11/12 mx-auto border-[#424646]"></div>
    <div className="text-center text-xs my-4">
      <p className='mb-2 tracking-wide text-center'>This is the official Website of Madan Mohan Malaviya University of Technology. | Best viewed in 1366*768 pixel resolution.</p>
      <div className="links flex flex-wrap mb-6 justify-center gap-3 	">
        <a href=""> Copyright Statement </a>
        <a href="">| Hyperlinking Policy</a>
        <a href="">| Terms & Conditions</a>
        <a href="">| Privacy Policy</a>
        <a href="">| Disclaimer</a>
        <a href="">| Powerd By Aaradhaya</a>
      </div>
    </div>
    <div className='h-3'></div>
    </div>
  )
}

export default Footer
