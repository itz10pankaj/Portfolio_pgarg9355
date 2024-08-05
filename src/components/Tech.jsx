import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center pb-10`}>
        Tech Stack.
      </h2>
      <div className='flex flex-row flex-wrap justify-center  items-center gap-10 gap-y-16'>
        {technologies.map((technology) => (
          <div className='flex flex-col justify-center items-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-[19px]'>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "Tech")