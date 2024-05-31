import { useState } from "react";
import {IoMenu, IoCodeWorking, IoLogoGithub, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import akshat from './assets/akshat.jpg'
import RealEstate from './assets/RealEstate.png'
import Tomato from './assets/Tomato.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AnimatePresence, motion} from 'framer-motion'

 function App() {

  const[isActive, setIsActive] = useState(false)

  return (
    <AnimatePresence initial={false}>
    <>
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative pb-20">
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-950 font-semibold">AKSHAT KUMAR</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home"  className="text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out">Home</a>
            <a href="#about"  className="text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out">About</a>
            <a href="#projects" className="text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out">Projects</a>
            <a href="#contact" className="text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out">Contact-Me</a>
            <a href="#home" className="ml-auto text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Hire Me</a>
          </div>

          <div className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase" />
          </div>

        {isActive && (  
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex-col items-center justify-evenly gap-6">
            <a href="#home" className="mb-2 ml-20 flex text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Home</a>
            <a href="#about" className="mb-2 ml-20 flex text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>About</a>
            <a href="#projects" className="mb-2 ml-20 flex text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Projects</a>
            <a href="#contact" className="mb-2 ml-20 flex text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Contact-Me</a>
            <a href="#home" className="mb-2 ml-20 text-base text-textBase font-semibold hover:text-slate-950 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out" onClick={() => setIsActive(false)}>Hire Me</a>
            </div>
        )}
        </div>
      </nav>
      <div className="flex w-screen min-w-screen h-screen min-h-screen pb-20">
        <main className="w-[80%] mt-5">
        {/* About Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24 "
        id="about"
        >
          
          {/* image box */}
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 bg-gray-200 rounded-md relative">
            <img className="h-full -right-4 top-4 object-cover rounded-lg drop-shadow-2xl" src={akshat} alt="" srcset="" />
          </div>
        </div>


        {/*content box*/}
        <div className="w-full h-420 flex flex-col items-center justify-center">
          <p className="text-lg text-Base text-center">
            Hi, I'm  <span className="text-orange-950 font-bold h-12">Akshat Kumar</span>
            <p className="mt-6 font-semibold">Pursued diploma from one of the reputed college i.e."DARJEELING POLYTECHNIC INSTITUTE".
              PURSUING BTECH FROM "IDEAL INSTITUTE OF ENGINEERING ", KALYANI NADIA - West Bengal.
              From the core head branch "COMPUTER SCIENCE AND ENGINEERING ".
              A web developement with new ideas and many useful skills into it i.e C, C++, Java,(coding skills), and other skills which I love to work with is html, css for designing part. Basically development part , finding bugs , debugs the code for app development , web development. 
              Always passionate for a new thing whether it's a programming skills or about anything related to daily lifestyle. 
              Thank you.. 
              ~Akshat kumar</p>
          </p>
        </div>
        </section>

          {/* Timeline */}
                <section className="w-full flex items-center justify-center">
        <VerticalTimeline className="ml-60">
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023-present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">TechnoEduTech</h4>
    <p>
      Creative Design, User Experience, Coding, Project Management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023-present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Prodigy-Infotech</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023-present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking />}
  >
    <h3 className="vertical-timeline-element-title">Coder</h3>
    <h4 className="vertical-timeline-element-subtitle">Self-Paced Coder</h4>
    <p>
     Problem - Solving 
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </section>
        {/* Projects section */}
        <section className="flex flex-wrap items-center justify-evenly my-24 gap-4 ml-40">
        <div className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
          <p className="text-lg text-textBase font-medium uppercase">Homyz</p>
          <img src={RealEstate} className="w-full h-full object-cover rounded-md my-4 cursor-pointer" alt="" />
          <div className="flex flex-1 items-center justify-evenly">
            <p className="text-lg text-textBase">Technologies
            <span className="block text-sm text-textBase">
              HTML, CSS, REACT JS, JAVASCRIPT, TAILWIND CSS
            </span>
            </p>
            <a href="https://github.com/AKSHATkumar22/homyz">
              <div>
                <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
              </div>
            </a>
          </div>
        </div>
        <section className="flex flex-wrap items-center justify-evenly my-24 gap-4 flex-col">
        <div className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
          <p className="text-lg text-textBase font-medium uppercase">Tomato Clone</p>

          <img src={Tomato} className="w-full h-full object-cover rounded-md my-4 cursor-pointer " alt=""/>
          <div className="flex flex-1 items-center justify-evenly">
            <p className="text-lg text-textBase">Technologies
            <span className="block text-sm text-textBase">
            HTML, CSS, REACT JS, JAVASCRIPT, TAILWIND CSS
            </span>
            </p>
            <a href="https://github.com/AKSHATkumar22/Tomato-app">
              <div>
                <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
              </div>
            </a>
          </div>
        </div>
        </section>
        </section>
        {/* contact */}
        <footer className="max-w-full py-8 mr-20 ml-40 text-textBase">
      <div className="container mx-auto px-12 ml-40 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold text-lg mb-4 text-center">Follow Me</h4>
          <ul>
            <li>
              <a
                href="#home"
                className="hover:text-slate-950 duration-100 ease-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-slate-950 duration-100 ease-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-slate-950 duration-100 ease-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-slate-950 duration-100 ease-out"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex mb-6 md:mb-0">
          <a href="#" className="mx-2 text-2xl hover:text-slate-950 duration-100 ease-out">
            <IoLogoGithub />
          </a>
          <a href="#" className="mx-2 text-2xl hover:text-slate-950 duration-100 ease-out">
            <IoLogoFacebook />
          </a>
          <a href="#" className="mx-2 text-2xl hover:text-slate-950 duration-100 ease-out">
            <IoLogoInstagram />
          </a>
          <a href="#" className="mx-2 text-2xl hover:text-slate-950 duration-100 ease-out">
            <IoLogoLinkedin />
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
          <p>Email: akshatk292@gmail.com</p>
          <p>Text me On Linkedin</p>
        </div>
      </div>
    </footer>
                </main>
                </div>
            </div>
    </>
    </AnimatePresence>
  );
}

export default App



