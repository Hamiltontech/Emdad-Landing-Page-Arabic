import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function Partners() {
 const [partner, setPartner] = useState([])

    useEffect(()=>{
        axios.get("https://strapi-155887-0.cloudclusters.net/api/partners?populate=*").then((res)=>{
            setPartner(res.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])


  return (
    <section class="bg-gray-900">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 lg:pb-24">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">شركاؤنا في النجاح</h2>
        <div class="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-6 text-gray-400">
            {partner?.map((item) => (
             <a href="#" class="flex justify-center items-center">
             <img src={"https://strapi-155887-0.cloudclusters.net" + item?.attributes?.Logo?.data?.attributes?.url} className='h-9 hover:text-white' />                        
         </a>
            ))}

        </div>
    </div>
</section>
  )
}

export default Partners