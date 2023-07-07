import React, { useContext } from 'react'
import { Songs } from '../context'

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-fuchsia-600 font-bold'>Now playing</h2>
            <h2 className='text-white text-2xl'>{song.name}</h2>
            <div className='lg:w-[240px] sm:w-full m-auto lg:mt-10 sm:mt-5'>
                <img className='lg:w-full sm:w-[50%] m-auto' src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className='flex justify-evenly items-center lg:mt-10 sm:mt-5'>
                <img className='w-[70px] rounded-full img-author' src={song.links.images[1].url} alt="avatar" />
                <span className='text-xl text-white'>{song.author}</span>
            </div>
        </div>
  )
}
