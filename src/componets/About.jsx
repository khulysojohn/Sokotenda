import React from 'react'

 const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1E2D40] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right py-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00FFC3]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Khuliso John, nice to meet you.please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                    I am a Full Stack Developer who is interested in Full Stack Developer roles.
                     I would love to work in an environment that will sharpen my skill of design 
                      and knowledge of programming so that I will help the organisation reach its goal in time. 
                      I prefer co-workers that will allow me to express my opinion regarding the problem so that
                       we contribute mentally toward the same problem to make it simple.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About;