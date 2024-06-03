import React, { useContext, useEffect, useRef, useState } from 'react'
import {Center, ContactShadows, Float, Html, Text3D, useGLTF, useMatcapTexture} from '@react-three/drei'
import { Context } from '../context/Context';
import { useFrame } from '@react-three/fiber';


const Three = () => {

 
    const {index} = useContext(Context);
    const [showBook, setShowBook] = useState(false);
    const [showTool, setShowTool] = useState(false);
    const [showProj, setShowProj] = useState(false);


    const model = useGLTF('./house.glb');
    const paper = useGLTF('./paper.glb');
    const tools = useGLTF('./tools.glb');
    const laptop = useGLTF('./model.gltf');



let homeRef = useRef();
let aboutRef = useRef();
let skillsRef = useRef();
let projectsRef = useRef();
let modelRef = useRef();
let ref = useRef();



    useFrame(() => {
      const lerpFactor = 0.02;

      if (index === 0) {
        homeRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        homeRef.current.scale.lerp({ x: 3, y: 4, z: 1 }, lerpFactor);
        projectsRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        aboutRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        skillsRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
        setShowBook(false);
        setShowTool(false);
        setShowProj(false);
      } else if (index === 1) {
        aboutRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        aboutRef.current.scale.lerp({ x: 3, y: 4, z: 1 }, lerpFactor);
        homeRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        skillsRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        projectsRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
        setShowBook(true);
      } else if (index === 2) {
        skillsRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        aboutRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        projectsRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        homeRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
        setShowTool(true);
        setShowBook(false);
      } else if (index === 3) {
        projectsRef.current.position.lerp({ x: 0, y: 0, z: 0 }, lerpFactor);
        skillsRef.current.position.lerp({ x: -6, y: 0, z: -5 }, lerpFactor);
        homeRef.current.position.lerp({ x: 6, y: 0, z: -5 }, lerpFactor);
        aboutRef.current.position.lerp({ x: 20, y: 0, z: -17 }, lerpFactor);
        setShowProj(true);
        setShowTool(false);
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

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} ref={homeRef} receiveShadow >
              <boxGeometry />
              <meshStandardMaterial color = "#8EAC50" />
              <Center>
              <Html className='text-2xl text-[#FFD700] font-bold'>
                001
              </Html>
              </Center>
            </mesh>

{showBook ?    <primitive object={paper.scene} scale = {13} position = {[0, 1, 1]} rotation-x = {0.6} ref = {modelRef} castShadow /> 
: showTool ?   <primitive object={tools.scene} scale = {11} position = {[0, 0, 1]} rotation-x = {0.6} ref = {modelRef} castShadow /> :
showProj ? (<>

<primitive object={laptop.scene} scale = {0.7} 
position = {[0, 0.2, 1]}  rotation-x={ 0.5 }  castShadow /> 
 
 
</>
):
            <primitive object={model.scene} scale = {0.09} position = {[-0.1, 0.2, 0.5]} rotation-x = {0.5} ref = {modelRef} castShadow />}
 
 <ContactShadows
    position-y={ - 1.4 }
    opacity={ 0.4 }
    scale={ 5 }
    blur={ 2.4 }
/>

            <mesh  scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[6, 0, -5]} ref={aboutRef} castShadow>

              <boxGeometry />
              <meshStandardMaterial color = "#F72798" />

              <Center>
              <Html className='text-2xl text-[#FFD700] font-bold'>
                002
              </Html>
              </Center>
            </mesh>

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[12, 0, -10]} ref={skillsRef}  castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "#864AF9"/>

              <Center>
              <Html className='text-2xl text-[#FFD700] font-bold'>
                003
              </Html>
              </Center>
            </mesh>

            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} position = {[20, 0, -17]} ref={projectsRef}  castShadow>
              <boxGeometry />
              <meshStandardMaterial color = "#FF5F00" />

              <Center>
              <Html className='text-2xl text-[#FFD700] font-bold'>
                004
              </Html>
              </Center>
            </mesh>
 


   </>
  )
}

export default Three
