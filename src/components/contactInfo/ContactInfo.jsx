import React from 'react'
import "./contactinfo.css"
import { FaLinkedinIn,FaGithub,FaPhone} from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";



export const ContactInfo = () => {
    const socials = [
        {
            id: 1,
            titre: "phone",
            address: "(+212) 695591467",
            icon: FaPhone
        },
        {
            id: 2,
            titre: "mail",
            address: "ouiameselouane@gmail.com",
            icon: LuMail
        },
        {
            id: 3,
            titre: "environement",
            address: "Marroc",
            icon: FaLocationDot
        },
    ]

  return (
    <div className='contact'>
        <div id='img'>
        <img src="/profil.jpeg" alt="profil" />
        </div>
        <div className='info'>
            <p id='par'>Developer</p>
            <div className='icon'>
                <a href='https://www.linkedin.com/in/ouiame-selouane-0b8323324/' target='_blank' className='icon1'>
                    <FaLinkedinIn/>
                </a>
                <a href='https://github.com/ouiameselouane' target='_blank' className='icon2'>
                    <FaGithub/>
                </a>
            </div>
            <div className='reseau'>
                {socials.map((item)=>(
                    <div >
                        <div id={item.titre}>
                            <item.icon/>
                        </div>
                        <div>
                            <h4>{item.titre}</h4>
                            <p>{item.address}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button>Download CV</button>
        </div>
    </div>
  )
}
