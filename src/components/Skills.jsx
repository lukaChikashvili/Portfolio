import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import types from '../assets/type.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import three from '../assets/three.png';
import redux from '../assets/redux.png';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import mui from '../assets/mui.png';

const Skills = () => {
  return (
    <div className='min-h-screen p-28'>
       <h1 className='text-6xl text-green-500'>Skills</h1>
      <div className='w-full bg-white h-1'></div> 

      <div className='flex pt-12 gap-8 w-1/2 flex-wrap'>
        <img src = {html}  className='w-24'/>
        <img src = {css}  className='w-24'/>
        <img src = {js}  className='w-24'/>
        <img src = {react}  className='w-24'/>
        <img src = {types}  className='w-24 rounded-md'/>
        <img src = {node}  className='w-24 rounded-md'/>
        <img src = {mongo} className='w-24 object-cover rounded-md'/>
        <img src = {three} className='w-24 object-cover rounded-md'/>
        <img src = {redux} className='w-24 object-cover rounded-md'/>
        <img src = {figma} className='w-24 object-cover rounded-md'/>
        <img src = {git} className='w-24 object-cover rounded-md'/>
        <img src = {mui} className='w-24 object-cover rounded-md'/>
      </div>
    </div>
  )
}

export default Skills
