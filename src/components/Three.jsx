import React from 'react'
import {Center, Float, Html, Text3D, useMatcapTexture} from '@react-three/drei'

const Three = () => {

    const [texture] = useMatcapTexture('482908_894E0D_FBDB52_CA7420', 256);

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
            <mesh scale-y = {4} scale-x = {3} rotation-x = {2.2} castShadow>
              <boxGeometry />
              <meshStandardMaterial />
              
     
   
            </mesh>
 


   </>
  )
}

export default Three
