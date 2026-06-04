import { useState } from 'react'
import './Clipe.css'

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

  const [clipeAtual] = useState(
    clipes[Math.floor(Math.random() * clipes.length)]
  )

  const [resposta, setResposta] = useState('')
  const [tentativas, setTentativas] = useState([])
  const [sugestaoSelecionada, setSugestaoSelecionada] = useState(-1)
  const [mutado, setMutado] = useState(false)

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

        {acertou && (
  <h2 className="mensagem-acerto">
    You got it right! It was {clipeAtual.nome} 🎉
  </h2>
)}

        <video
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

        <div className="tentativas">

          {[...tentativas].reverse().map((tentativa, index) => (

            <div
              key={index}

              className={
                tentativa.toLowerCase() ===
                clipeAtual.nome.toLowerCase()
                  ? 'tentativa-item acerto'
                  : 'tentativa-item erro'
              }
            >
              {tentativa}
            </div>

          ))}

        </div>

      </div>

    </div>
  )
}