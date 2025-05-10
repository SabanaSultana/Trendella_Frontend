import React, { useEffect, useState } from 'react'
import image1 from '../assest/banner/9604469.jpg'
import image2 from '../assest/banner/casual-woman-black-blazer_53876-149612.avif'
import image3 from "../assest/banner/glamorous-stiletto-pair-vibrant-pink-color-generated-by-ai.jpg";
import image4 from '../assest/banner/glamour-beauty-jewelry-luxury-concept-close-up-beautiful-woman-face-with-pearl-earring-rose-quartz-serenity-gradient-background_380164-142796.jpg'
import image5 from "../assest/banner/luxury-shine-diamonds-digital-art.jpg";
import image6 from "../assest/banner/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg";
import image7 from "../assest/banner/shopping-young-female-model-holding-her-purse-touching-lip-thoughtful-smiling-staring-upper-l.jpg";



import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ]


    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])

  return (
    <div className='container mx-auto px-4 rounded '>
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>

                
              <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full'/>
                            </div>
                            )
                        })
                }
              </div>

        </div>
    </div>
  )
}

export default BannerProduct