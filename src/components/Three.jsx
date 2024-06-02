import React, { useContext, useEffect, useRef } from 'react'
import {Center, Float, Html, Text3D, useMatcapTexture} from '@react-three/drei'
import { Context } from '../context/Context';
import { useFrame } from '@react-three/fiber';

const Three = () => {

    const [texture] = useMatcapTexture('482908_894E0D_FBDB52_CA7420', 256);
    const {index} = useContext(Context);

let homeRef = useRef();
let aboutRef = useRef();
let skillsRef = useRef();
let projectsRef = useRef();


    useFrame(() => {
        if(index === 1 ) {
          aboutRef.current.position.x = 0;
          aboutRef.current.position.z = 0;
          aboutRef.current.scale.y = 4;
          aboutRef.current.scale.x = 3;
          homeRef.current.position.x = -6;
          homeRef.current.scale.y = 4;
          homeRef.current.scale.x = 3;
          homeRef.current.position.z = -3;
          skillsRef.current.position.set(6, 0, -5);
          projectsRef.current.position.set(20, 0, -17)
        }else if(index === 2) {
           skillsRef.current.position.set(0, 0, 0);
           aboutRef.current.position.set(-6, 0, -5);
           projectsRef.current.position.set(6, 0, -5);
           homeRef.current.position.set(20, 0, -17);
        }else if(index === 3) {
            projectsRef.current.position.set(0, 0, 0);
            skillsRef.current.position.set(-6, 0, -5);
            homeRef.current.position.set(6, 0, -5);
            aboutRef.current.position.set(20, 0, -17);
        }else if(index === 0) {
            homeRef.current.position.set(0, 0, 0);
            projectsRef.current.position.set(-6, 0, -5);
            aboutRef.current.position.set(6, 0, -5);
            skillsRef.current.position.set(20, 0, -17);
           
        }
    })

  return (
   <>

<directionalLight
castShadow
position={ [ 4, 4, 1 ] }
intensity={ 1.5 }
shadow-mapSize={ [ 1024, 1024 ] }
shadow-camera-near={ 1 }
shadow-camera-far={ 10 }
shadow-camera-top={ 10 }
shadow-camera-right={ 10 }
shadow-camera-bottom={ - 10 }
shadow-camera-left={ - 10 }
/>
<ambientLight intensity={0.3} />
<pointLight position={[-10, -10, -10]} intensity={0.5} />
<hemisphereLight skyColor={'#ffffff'} groundColor={'#b9b9b9'} intensity={0.9} />

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} ref={homeRef} castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "blue" />
            </mesh>
 
            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[6, 0, -5]} ref={aboutRef} castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "red" />
            </mesh>

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[12, 0, -10]} ref={skillsRef}  castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "green" />
            </mesh>

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[20, 0, -17]} ref={projectsRef}  castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "purple" />
            </mesh>
 


   </>
  )
}

export default Three
