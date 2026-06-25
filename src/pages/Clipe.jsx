import { useState, useRef } from 'react'
import './Clipe.css'
import { FaChartBar } from 'react-icons/fa'
import '../App.css'
import musicIcon from '../assets/music-icon.png'
import clipIcon from '../assets/clip-icon.png'
import lyricIcon from '../assets/lyric-icon.png'
import { Link } from 'react-router-dom'




export default function Clipe() {

  const clipes = [
    {
      nome: '911',
      video: '/clipes/clipe-911.mp4'
    },
    {
      nome: 'Sour Candy',
      video: '/clipes/clipe-sour-candy.mp4'
    },
    {
      nome: 'Rain On Me',
      video: '/clipes/clipe-rain-on-me.mp4'
    },
    {
      nome: 'Stupid Love',
      video: '/clipes/clipe-stupid-love.mp4'
    },
    {
      nome: 'Always Remember Us This Way',
      video: '/clipes/clipe-always-remember-us-this-way.mp4'
    },
    {
      nome: 'I Will Never Love Again',
      video: '/clipes/clipe-i-will-never-love-again.mp4'
    },
    {
      nome: 'Just Dance',
      video: '/clipes/clipe-just-dance.mp4'
    },
    {
      nome: 'LoveGame',
      video: '/clipes/clipe-lovegame.mp4'
    },
    {
      nome: 'Paparazzi',
      video: '/clipes/clipe-paparazzi.mp4'
    },
    {
      nome: 'Poker Face',
      video: '/clipes/clipe-poker-face.mp4'
    },
    {
      nome: 'Eh, Eh',
      video: '/clipes/clipe-eh-eh.mp4'
    },
    {
      nome: 'Beautiful, Dirty, Rich',
      video: '/clipes/clipe-beautiful-dirty-rich.mp4'
    },
    {
      nome: 'Bad Romance',
      video: '/clipes/clipe-bad-romance.mp4'
    },
    {
      nome: 'Alejandro',
      video: '/clipes/clipe-alejandro.mp4'
    },
    {
      nome: 'Marry The Night',
      video: '/clipes/clipe-marry-the-night.mp4'
    },
    {
      nome: 'Telephone',
      video: '/clipes/clipe-telephone.mp4'
    },
    {
      nome: 'Judas',
      video: '/clipes/clipe-judas.mp4'
    },
    {
      nome: 'Born This Way',
      video: '/clipes/clipe-born-this-way.mp4'
    },
    {
      nome: 'Yoü and I',
      video: '/clipes/clipe-you-and-i.mp4'
    },
    {
      nome: 'The Edge Of Glory',
      video: '/clipes/clipe-the-edge-of-glory.mp4'
    },
    {
      nome: 'G.U.Y.',
      video: '/clipes/clipe-guy.mp4'
    },
    {
      nome: 'Perfect Illusion',
      video: '/clipes/clipe-perfect-illusion.mp4'
    },
    {
      nome: 'Applause',
      video: '/clipes/clipe-applause.mp4'
    },
    {
      nome: 'John Wayne',
      video: '/clipes/clipe-john-wayne.mp4'
    },
    {
      nome: 'Million Reasons',
      video: '/clipes/clipe-million-reasons.mp4'
    },
    {
      nome: 'Abracadabra',
      video: '/clipes/clipe-abracadabra.mp4'
    },
    {
      nome: 'Disease',
      video: '/clipes/clipe-disease.mp4'
    },
    {
      nome: 'The Dead Dance',
      video: '/clipes/clipe-the-dead-dance.mp4'
    },
    {
      nome: 'Die With A Smile',
      video: '/clipes/clipe-die-with-a-smile.mp4'
    },
    {
      nome: 'Til It Happens To You',
      video: '/clipes/clipe-til-it-happens-to-you.mp4'
    },
    {
      nome: 'Hold My Hand',
      video: '/clipes/clipe-hold-my-hand.mp4'
    },
    {
      nome: 'RUNWAY',
      video: '/clipes/clipe-runway.mp4'
    }
  ]

  

const videoRef = useRef(null)

  const [clipeAtual] = useState(
    clipes[Math.floor(Math.random() * clipes.length)]
  )
  
  const [resposta, setResposta] = useState('')
  const [tentativas, setTentativas] = useState([])
  const [sugestaoSelecionada, setSugestaoSelecionada] = useState(-1)
  const [mutado, setMutado] = useState(false)
  const [mostrarStats, setMostrarStats] = useState(false)

const [estatisticas, setEstatisticas] = useState(() => {
  const salvas = localStorage.getItem(
    'estatisticas-gagadle-clipes'
  )

  if (salvas) {
    return JSON.parse(salvas)
  }

  return {
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    sequencia: 0,
    melhorSequencia: 0,
    tentativa1: 0,
    tentativa2: 0,
    tentativa3: 0,
    tentativa4: 0,
    tentativaDerrota: 0
  }
})

  const sugestoes = clipes.filter((clipe) => {

    const combinaPesquisa =
      clipe.nome
        .toLowerCase()
        .startsWith(resposta.toLowerCase())

    const jaTentou = tentativas.some(
      (tentativa) =>
        tentativa.toLowerCase() ===
        clipe.nome.toLowerCase()
    )

    return combinaPesquisa && !jaTentou
  })

  const acertou =
    tentativas[tentativas.length - 1]?.toLowerCase() ===
    clipeAtual.nome.toLowerCase()

  function enviarResposta(respostaEscolhida) {

    const respostaFinal =
      (respostaEscolhida || resposta).trim()

    if (!respostaFinal) return

    const clipeExiste = clipes.some(
  (clipe) =>
    clipe.nome.toLowerCase() ===
    respostaFinal.toLowerCase()
)

if (!clipeExiste) return

    const jaTentou = tentativas.some(
      (tentativa) =>
        tentativa.toLowerCase() ===
        respostaFinal.toLowerCase()
    )

    if (jaTentou) return

    setTentativas((prev) => [
      ...prev,
      respostaFinal
    ])

    const acertouAgora =
  respostaFinal.toLowerCase() ===
  clipeAtual.nome.toLowerCase()

  if (acertouAgora) {

  const hoje = new Date()
    .toISOString()
    .split('T')[0]

  setEstatisticas((stats) => {

    const hojeData = new Date()
    hojeData.setHours(0, 0, 0, 0)

    const ontemData = new Date(hojeData)
    ontemData.setDate(
      ontemData.getDate() - 1
    )

    let novaSequencia = 1

    if (stats.ultimaVitoria) {

      const ultimaData =
        new Date(stats.ultimaVitoria)

      ultimaData.setHours(
        0,
        0,
        0,
        0
      )

      if (
        ultimaData.getTime() ===
        ontemData.getTime()
      ) {
        novaSequencia =
          stats.sequencia + 1
      }

    }

    const novasStats = {
      ...stats,

      jogos: stats.jogos + 1,
      vitorias: stats.vitorias + 1,

      sequencia: novaSequencia,

      melhorSequencia: Math.max(
        stats.melhorSequencia,
        novaSequencia
      ),

      ultimaVitoria: hoje
    }

    const tentativaAcerto =
      tentativas.length + 1

    if (tentativaAcerto === 1)
      novasStats.tentativa1++

    if (tentativaAcerto === 2)
      novasStats.tentativa2++

    if (tentativaAcerto === 3)
      novasStats.tentativa3++

    if (tentativaAcerto === 4)
      novasStats.tentativa4++

    localStorage.setItem(
      'estatisticas-gagadle-clipes',
      JSON.stringify(novasStats)
    )

    return novasStats
  })
}

if (acertou) return

if (
  !acertouAgora &&
  tentativas.length + 1 >= 4
) {

  setEstatisticas((stats) => {

    const novasStats = {
      ...stats,

      jogos: stats.jogos + 1,

      derrotas:
        stats.derrotas + 1,

      tentativaDerrota:
        (stats.tentativaDerrota || 0) + 1,

      sequencia: 0
    }

    localStorage.setItem(
      'estatisticas-gagadle-clipes',
      JSON.stringify(novasStats)
    )

    return novasStats
  })
}

    setResposta('')
    setSugestaoSelecionada(-1)
  }

  const blur = Math.max(30 - tentativas.length * 6, 0)

  

  return (
    <div className="clipe-container">

      <div className="container">

        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
        />

        <div className="top-icons-bar">

  <button
    className="botao-stats"
    onClick={() => setMostrarStats(true)}
  >
    <FaChartBar />
  </button>

  <div className="streak-container">
    <div className="streak-fire-wrapper">

      <svg
        className="streak-fire1"
        viewBox="0 0 24 24"
      >
        <path
          d="M13.5 2C14 5 12 6.5 10.5 8C9 9.5 8 11 8 13.5C8 17.1 10.9 20 14.5 20C18.1 20 21 17.1 21 13.5C21 9.5 18.5 6.5 13.5 2Z"
          fill="#ecaad3"
        />
      </svg>

      <svg
        className="streak-fire2"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 9C13.2 10.5 12.3 11.3 11.5 12.2C10.7 13 10.2 14 10.2 15.3C10.2 17.4 11.9 19 14 19C16.1 19 17.8 17.3 17.8 15.2C17.8 13 16.5 11.1 13 9Z"
          fill="#eb28d1"
        />
      </svg>

      <span className="streak-number">
        {estatisticas.sequencia}
      </span>

    </div>
  </div>

</div>

        {acertou && (
  <h2 className="mensagem-acerto">
    You got it right! It was {clipeAtual.nome} 🎉
  </h2>
)}

        <video
  ref={videoRef}
  src={clipeAtual.video}
  ref={(video) => {
    if (video) {
      video.play().catch(() => {})
    }
  }}
  src={clipeAtual.video}
  className="clipe-video"
  autoPlay
  muted={!acertou || mutado}
  loop
  playsInline
  preload="auto"
  disablePictureInPicture
  disableRemotePlayback
  controlsList="nodownload nofullscreen noremoteplayback"
  style={{
    filter: acertou
      ? 'blur(0px)'
      : `blur(${blur}px)`
      
  }}
/>
{acertou && (
  <button
    className="botao-mute"
    onClick={() => setMutado(!mutado)}
  >
    {mutado ? '🔇 Unmute' : '🔊 Mute'}
  </button>
)}

        {!acertou && (

          <div className="input-area">

            <input
              type="text"
              value={resposta}

              onChange={(e) => {
                setResposta(e.target.value)
                setSugestaoSelecionada(-1)
              }}

              onKeyDown={(event) => {

                if (event.key === 'ArrowDown') {
                  event.preventDefault()

                  setSugestaoSelecionada((prev) => {

                    if (prev < sugestoes.length - 1) {
                      return prev + 1
                    }

                    return prev
                  })
                }

                if (event.key === 'ArrowUp') {
                  event.preventDefault()

                  setSugestaoSelecionada((prev) => {

                    if (prev > 0) {
                      return prev - 1
                    }

                    return 0
                  })
                }

                if (event.key === 'Enter') {
                  event.preventDefault()

                  if (
                    sugestaoSelecionada >= 0 &&
                    sugestoes[sugestaoSelecionada]
                  ) {

                    enviarResposta(
                      sugestoes[sugestaoSelecionada].nome
                    )

                  } else {

                    enviarResposta()

                  }
                }

              }}
            />

            <button
              type="button"
              onClick={() => enviarResposta()}
            >
              Enviar
            </button>

            {resposta && sugestoes.length > 0 && (

              <div className="sugestoes">

                {sugestoes.map((clipe, index) => (

                  <div
                    key={clipe.nome}

                    className={
                      index === sugestaoSelecionada
                        ? 'sugestao-item sugestao-ativa'
                        : 'sugestao-item'
                    }

                    onClick={() => {
                      enviarResposta(clipe.nome)
                    }}
                  >
                    {clipe.nome}
                  </div>

                ))}

              </div>

            )}

          </div>

        )}

        <div className="mode-selector">

  <div className="mode-line"></div>

  <Link to="/music">
    <img src={musicIcon} alt="Music" className="mode-icon" />
  </Link>

  <Link to="/clipe">
    <img src={clipIcon} alt="Clip" className="mode-icon" />
  </Link>

  <Link to="/lyrics">
    <img src={lyricIcon} alt="Lyrics" className="mode-icon" />
  </Link>

</div>

        <div className="tentativas">

          {[...tentativas].reverse().map((tentativa, index) => (

            <div
  key={`${tentativa}-${index}`}
  className={`
    tentativa-item
    ${
      tentativa.toLowerCase() ===
      clipeAtual.nome.toLowerCase()
        ? 'acerto'
        : 'erro'
    }
    ${index === 0 ? 'flip' : ''}
  `}
>
  {tentativa}
</div>

          ))}

        </div>

      </div>


      

{mostrarStats && (
  <div className="popup-fundo">
    <div className="estatisticas">

      <button
        className="fechar-popup"
        onClick={() => setMostrarStats(false)}
      >
        X
      </button>

      <div className="stats-box">

        <h2>
          <FaChartBar />
        </h2>

        <div className="stats-top">

          <div>
            <strong>{estatisticas.jogos}</strong>
            <span>games</span>
          </div>

          <div>
            <strong>
              {estatisticas.jogos > 0
                ? Math.round(
                    (estatisticas.vitorias /
                      estatisticas.jogos) *
                      100
                  )
                : 0}
              %
            </strong>

            <span>wins</span>
          </div>

          <div>
            <strong>
              {estatisticas.sequencia}
            </strong>

            <span>win streak</span>
          </div>

          <div>
            <strong>
              {estatisticas.melhorSequencia}
            </strong>

            <span>best streak</span>
          </div>

        </div>

      </div>

    </div>

    
  </div>

  
  
)}

    </div>
    
  )
}

