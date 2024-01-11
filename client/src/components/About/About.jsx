import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GoGoal } from "react-icons/go";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='mt-10 mb-20 flex flex-col gap-2 max-w-7xl mx-auto sm:px-10 md:p-0 text-white/75'>
            <div className='flex flex-col-reverse md:flex-row gap-20 mb-4'>

                <div className='p-6 md:w-2/3 '>
                    <h2 className='text-4xl  font-semibold mb-4 w-3/4 '>About Nexus</h2>
                    Welcome to Nexus, the dynamic hub of computer science enthusiasts at Sardar Vallabhbhai National Institute of Technology (SVNIT) Surat. At Nexus, we envision a vibrant community where students passionate about computer science come together to thrive and excel. Our mission is to create a conducive environment that goes beyond academic boundaries, fostering holistic growth and learning.
                    <div className='mt-10'>
                        <h2 className='text-4xl font-semibold mb-4 '>Our Vision </h2>
                        To be the catalyst for innovation and excellence in the field of computer science at SVNIT, nurturing a community of forward-thinking individuals equipped to face the challenges of the digital era.
                    </div>
                </div>
                <div className=' flex flex-col items-center justify-center  md:w-1/3 '>
                    <img src="/assets/nexus_e.png" alt="" className='w-[15rem] h-[15rem] md:h-[16rem] md:w-[16rem]  object-cover ' />
                    <h3 className='text-3xl font-bold my-8  md:my-4 font-mono text-white'>NEXUS NIT Surat</h3>
                    <p className='text-sm w-[50%] md:w-[75%] text-center '>Departmental Cell of Computer Science And Engineering Department </p>

                    <div className="flex gap-4 my-4 ">
                        <Link to={"#"} target="_blank">
                            <FaLinkedinIn className="transition-all duration-400 bg-[#0077b5] border  hover:bg-transparent hover:text-[#0077b5]  
                        hover:border-[#0077b5] h-10 w-10 p-2 text-white rounded-full" size={24} />
                        </Link>
                        <Link to={"#"} target="_blank">
                            <FaInstagram className="transition-all duration-400 bg-[#cd486b] border hover:bg-transparent hover:text-[#cd486b]  
                        hover:border-[#cd486b] h-10 w-10 p-2 text-white rounded-full" size={24} />
                        </Link>
                        <Link to={"#"} target="_blank">
                            <FaFacebookF className="transition-all duration-400 bg-[#316FF6] border hover:bg-transparent hover:text-[#316FF6]  
                        hover:border-[#316FF6] h-10 w-10 p-2 text-white rounded-full" size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex flex-col md:gap-4 mb-10 p-6'>
                <h2 className='text-4xl font-semibold mb-4'>Our Mission</h2>
                <div className='flex flex-col items-center md:flex-row flex-wrap md:justify-around '>

                    <p className=' text-xs md:text-sm md:w-[40vw]  flex gap-4 items-center'><GoGoal className='h-44 w-44' />Fostering Academic Excellence: Empower students with the knowledge, skills, and resources to excel in computer science, both academically and professionally.
                    </p>
                    <p className='text-xs md:text-sm md:w-[40vw] flex gap-4 items-center'><GoGoal className='h-44 w-44' />Promoting Collaboration: Facilitate a collaborative platform where students, regardless of their academic year, can exchange ideas, share knowledge, and work together on innovative projects.
                    </p>
                    <p className='text-xs md:text-sm md:w-[40vw] flex gap-4 items-center'><GoGoal className='h-44 w-44' />Organizing Impactful Events: Conduct coding competitions, workshops, and seminars to provide hands-on experience and exposure to the latest trends and technologies in the field.
                    </p>
                    <p className='text-xs md:text-sm md:w-[40vw] flex gap-4 items-center'><GoGoal className='h-44 w-44' />Building a Supportive Network: Establish a strong support system within the CSE community, creating mentorship programs to bridge the gap between seniors and juniors.
                    </p>
                    <p className='text-xs md:text-sm md:w-[40vw] flex gap-4 items-center'><GoGoal className='h-44 w-44' />Encouraging Holistic Development: Emphasize the importance of extracurricular activities and soft skills, ensuring that students graduate not only as proficient coders but also as well-rounded individuals.</p>
                </div>
            </div>
        </div>
    )
}

export default About