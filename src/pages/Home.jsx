import { Link } from 'react-router-dom'
import '../Home.css'
import musicButton from '../assets/music-button.png'
import clipButton from '../assets/clip-button.png'
import lyricsButton from '../assets/lyric-button.png'

export default function Home() {
  return (
    <div className="home">

      <img
  src="/logo.png"
  alt="Gagadle"
  className="logo"
/>

      <Link to="/music" className="image-button">
  <img src={musicButton} alt="Music" />

  <div className="button-text">
    <h2>Music</h2>
    <p>Guess the song</p>
  </div>
</Link>

      <Link to="/clipe" className="image-button">
  <img src={clipButton} alt="Clip" />

  <div className="button-text">
    <h2>Clip</h2>
    <p>Guess the music video</p>
  </div>
</Link>

      <Link to="/lyrics" className="image-button">
  <img src={lyricsButton} alt="Lyrics" />

  <div className="button-text">
    <h2>Lyrics</h2>
    <p>Guess from the lyrics</p>
  </div>
</Link>

    </div>
  )
}