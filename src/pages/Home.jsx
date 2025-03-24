/* eslint-disable no-unused-vars */
import { useState,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Room from '../models/Room'


{/*<div className='absolute top-28 left-0 right-0 z-10 flex
          items-center justify-center'>
         POPUP
        </div>*/}

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);

  const adjustRoomForScreenSize = () => {
    let screenScale =null;
    let screenPosition = [0,-6.5,-43];
    

    if(window.innerWidth<768) {
      screenScale = [19,9,11];
    } else{
      screenScale = [13,12,11]
    }

    return[screenScale,screenPosition];

  }
  
  
    
    const [roomScale,roomPosition] = adjustRoomForScreenSize();
   
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
      className={`w-full h-screen bg-transparent ${isRotating ? 
        'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1,far:1000}}>
          <Suspense fallback={<Loader/>}>
           <directionalLight position={[1,1,1]} intensity={-2}/>
           <ambientLight intensity={1}/>
           
           <spotLight intensity={1}/>
           <hemisphereLight groundColor="#FFA500" intensity={2}/> 
           
           
           <Room
             position={roomPosition}
             scale={roomScale}
             rotation={[0.1, 4.7077, 0]}
             isRotating={isRotating}
             setIsRotating={setIsRotating}
           />
           
           
           
           

          
       </Suspense>
      </Canvas>
    </section>
  )
}

export default Home