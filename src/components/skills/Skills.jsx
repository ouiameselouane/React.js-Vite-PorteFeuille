import React from 'react'
import './skills.css'
import { About } from '../about-text/About'
import { Langue } from '../langue/Langue'


export const Skills = () => {
  return (
    <div className='all'>
       <About titre="About">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse reprehenderit illum adipisci accusantium eos sit, consequuntur pariatur tenetur earum praesentium odit ex beatae voluptas. Illum alias accusamus ea debitis!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quisquam natus dolores sit dicta ad animi eos, provident esse officia labore voluptates, perferendis voluptate impedit illum doloribus corporis alias laudantium.
        </About>

        <About titre="Projects"/>
        <Langue/>
        <About titre="Projects">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse reprehenderit illum adipisci accusantium eos sit, consequuntur pariatur tenetur earum praesentium odit ex beatae voluptas. Illum alias accusamus ea debitis!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quisquam natus dolores sit dicta ad animi eos, provident esse officia labore voluptates, perferendis voluptate impedit illum doloribus corporis alias laudantium.
        </About>
    </div>
  )
}
