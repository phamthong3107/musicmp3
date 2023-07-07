import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../context'

export default function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setidSong(song.id)
      }, [song])
    
  return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto w-full'>
            <thead className='text-white h-12'>
                <tr>
                    <th className='w-[10%]'>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i className='fa fa-download'></i></th>
                </tr>
            </thead>
            <tbody>
            {
                DataSongs.map((song, index) => (
                <tr key={index} 
                className={`border-t-2 border-y-gray-500/50 h-12 text-white hover:bg-violet-500 ${idSong === song.id && 'bg-violet-500 text-violet-800'}` }
                onClick={() => handlePlaySong(song.id)}>
                    <td className='text-center'>{index + 1}</td>
                    <td>{song.name}</td>
                    <td className='text-center'>{song.author}</td>
                    <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
                </tr>
                ))
            }    
                
            </tbody>
        </table>
    </div>
  )
}
