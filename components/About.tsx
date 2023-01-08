import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                    background
                </h4>
                <p className='text-base'>
                    I'm Leandro. You might also know me as PAPA react! I'll be your coach
                    & mentor inside the PAPAFAM, here's a little bit about me... I've been
                    coding for over 10 years now. As a Full Stack developer I've worked
                    both with startups and large corporations to help build & scale their
                    companies. Along the journey I realised my passio existed in helping
                    others excel and pursue their dreams as upcoming developers across the
                    globe. Through live coaching sessions on Youtube, I have accumulated
                    several MILLION views demonstrating how to apply developer skills in a
                    range of cool bulds and challenges. I deliver REAL VALUE by teaching
                    REAL WORLD proyects to help students enter the world of web
                    development. You'll get hands-on experience and lear the skills that
                    are required to succed in the real-wolrd in this community. And if 
                    that's not enough I have cloned most of the applications you have used
                    in your life!
                </p>
            </div>
    </motion.div>
  )
}