import { useState } from 'react';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import { Songs } from './context';
import DataSongs from './data/songs.json'
function App() {
  const [song , setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song){
      setSong(DataSongs[0])
    }else{
      setSong(song)
    }
  } 
   return (
    <div className="App">
      <Songs.Provider value={{ DataSongs , song , handleSetSong }}>
        <Navbar/>
        <div className='grid lg:grid-cols-3 sm:grid-cols-none bg-violet-950 h-screen-navbar-player overflow-hidden'>
          <DetailSong/>
          <ListSongs/>
        </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
