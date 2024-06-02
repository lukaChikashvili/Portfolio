import React, { useContext, useEffect, useRef } from 'react'
import {Center, Float, Html, Text3D, useGLTF, useMatcapTexture} from '@react-three/drei'
import { Context } from '../context/Context';
import { useFrame } from '@react-three/fiber';

const Three = () => {

    const [texture] = useMatcapTexture('482908_894E0D_FBDB52_CA7420', 256);
    const {index} = useContext(Context);

    const model = useGLTF('./house.glb');

let homeRef = useRef();
let aboutRef = useRef();
let skillsRef = useRef();
let projectsRef = useRef();
let modelRef = useRef();



    useFrame(() => {
      const lerpFactor = 0.02;

      if (index === 0) {
        homeRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        homeRef.current.scale.lerp({ x: 3, y: 4, z: 1 }, lerpFactor);
        projectsRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        aboutRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        skillsRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
      } else if (index === 1) {
        aboutRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        aboutRef.current.scale.lerp({ x: 3, y: 4, z: 1 }, lerpFactor);
        homeRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        skillsRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        projectsRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
      } else if (index === 2) {
        skillsRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        aboutRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        projectsRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        homeRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
      } else if (index === 3) {
        projectsRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        skillsRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        homeRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        aboutRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
      }
  
      modelRef.current.rotation.y += 0.001;
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

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} ref={homeRef} receiveShadow>
              <boxGeometry />
              <meshStandardMaterial color = "blue" />
              
            </mesh>

            <primitive object={model.scene} scale = {0.09} position = {[-0.1, 0.2, 0.5]} rotation-x = {0.5} ref = {modelRef} castShadow />
 
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
