import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChartBar } from 'react-icons/fa'
import '../App.css'

function obterMusicaDoDia(musicas) {
  const ordemDiaria = [
    17, 4, 39, 8, 22, 1, 31, 14, 5, 27,
    43, 2, 11, 35, 19, 7, 28, 0, 33, 24,
    12, 45, 6, 30, 16, 41, 3, 26, 10, 37,
    20, 47, 9, 29, 13, 34, 21, 42, 15, 32,
    18, 44, 23, 38, 25, 40, 36, 46, 48, 49,
    50, 51, 52, 53, 54, 55
  ]

  const dataInicial = new Date('2026-01-01')

  const hoje = new Date()
hoje.setDate(hoje.getDate() + 21)

  const diasPassados = Math.floor(
    (hoje - dataInicial) / (1000 * 60 * 60 * 24)
  )

  const indiceDaFila =
    diasPassados % ordemDiaria.length

  const indiceMusica =
    ordemDiaria[indiceDaFila] % musicas.length

  return musicas[indiceMusica]
}

function obterMusicaDeOntem(musicas) {
  const ordemDiaria = [
    17, 4, 39, 8, 22, 1, 31, 14, 5, 27,
    43, 2, 11, 35, 19, 7, 28, 0, 33, 24,
    12, 45, 6, 30, 16, 41, 3, 26, 10, 37,
    20, 47, 9, 29, 13, 34, 21, 42, 15, 32,
    18, 44, 23, 38, 25, 40, 36, 46, 48, 49,
    50, 51, 52, 53, 54, 55
  ]

  const dataInicial = new Date('2026-01-01')
  const hoje = new Date()
  

  const diasPassados = Math.floor(
    (hoje - dataInicial) / (1000 * 60 * 60 * 24)
  )

  const indiceOntem =
    (diasPassados - 1 + ordemDiaria.length) %
    ordemDiaria.length

  return musicas[
    ordemDiaria[indiceOntem] % musicas.length
  ]
}

function Musica() {
  const navigate = useNavigate()
  const musicas = [
    {
      nome: 'Bad Romance',
      audio: '/musicas/bad-romance.mp3'
    },
    {
      nome: 'Alejandro',
      audio: '/musicas/alejandro.mp3'
    },
    {
      nome: 'Judas',
      audio: '/musicas/judas.mp3'
    },
    {
      nome: 'Paparazzi',
      audio: '/musicas/paparazzi.mp3'
    },
    {
      nome: 'Poker Face',
      audio: '/musicas/poker-face.mp3'
    },
    {
      nome: 'Yoü and I',
      audio: '/musicas/you-and-i.mp3'
    },
    {
      nome: 'LoveGame',
      audio: '/musicas/lovegame.mp3'
    },
    {
      nome: 'Just Dance',
      audio: '/musicas/just-dance.mp3'
    },
    {
      nome: 'Eh, Eh',
      audio: '/musicas/eh-eh.mp3'
    },
    {
      nome: 'Beautiful, Dirty, Rich',
      audio: '/musicas/beautifuldirtyrich.mp3'
    },
    {
      nome: 'Telephone',
      audio: '/musicas/telephone.mp3'
    },
    {
      nome: 'Marry The Night',
      audio: '/musicas/marry-the-night.mp3'
    },
    {
      nome: 'Born This Way',
      audio: '/musicas/born-this-way.mp3'
    },
    {
      nome: 'The Edge Of Glory',
      audio: '/musicas/the-edge-of-glory.mp3'
    },
    {
      nome: 'G.U.Y.',
      audio: '/musicas/g.u.y..mp3'
    },
    {
      nome: 'Applause',
      audio: '/musicas/applause.mp3'
    },
    {
      nome: 'John Wayne',
      audio: '/musicas/john-wayne.mp3'
    },
    {
      nome: 'Perfect Illusion',
      audio: '/musicas/perfect-illusion.mp3'
    },
    {
      nome: 'Million Reasons',
      audio: '/musicas/million-reasons.mp3'
    },
    {
      nome: 'Stupid Love',
      audio: '/musicas/stupid-love.mp3'
    },
    {
      nome: 'Rain On Me',
      audio: '/musicas/rain-on-me.mp3'
    },
    {
      nome: '911',
      audio: '/musicas/911.mp3'
    },
    {
      nome: 'Abracadabra',
      audio: '/musicas/abracadabra.mp3'
    },
    {
      nome: 'Disease',
      audio: '/musicas/disease.mp3'
    },
    {
      nome: 'The Dead Dance',
      audio: '/musicas/the-dead-dance.mp3'
    },
    {
      nome: 'Die With A Smile',
      audio: '/musicas/die-with-a-smile.mp3'
    },
    {
      nome: 'Til It Happens To You',
      audio: '/musicas/til-it-happens-to-you.mp3'
    },
    {
      nome: 'Hold My Hand',
      audio: '/musicas/hold-my-hand.mp3'
    },
    {
      nome: 'RUNWAY',
      audio: '/musicas/runway.mp3'
    },
    {
      nome: 'Vanish Into You',
      audio: '/musicas/vanish-into-you.mp3'
    },
    {
      nome: 'Always Remember Us This Way',
      audio: '/musicas/always-remember-us-this-way.mp3'
    },
    {
      nome: 'Shallow',
      audio: '/musicas/shallow.mp3'
    },
    {
      nome: 'Bloody Mary',
      audio: '/musicas/bloody-mary.mp3'
    },
    {
      nome: 'I Will Never Love Again',
      audio: '/musicas/i-will-never-love-again.mp3'
    },
    {
      nome: 'The Cure',
      audio: '/musicas/the-cure.mp3'
    },
    {
      nome: 'Sour Candy',
      audio: '/musicas/sour-candy.mp3'
    },
    {
      nome: 'Fashion!',
      audio: '/musicas/fashion.mp3'
    },
    {
      nome: 'Venus',
      audio: '/musicas/venus.mp3'
    },
    {
      nome: 'Government Hooker',
      audio: '/musicas/government-hooker.mp3'
    },
    {
      nome: 'Do What U Want',
      audio: '/musicas/do-what-u-want.mp3'
    },
    {
      nome: 'Monster',
      audio: '/musicas/monster.mp3'
    },
    {
      nome: 'Dance In The Dark',
      audio: '/musicas/dance-in-the-dark.mp3'
    },
    {
      nome: 'Replay',
      audio: '/musicas/replay.mp3'
    },
    {
      nome: 'Scheiße',
      audio: '/musicas/scheiße.mp3'
    },
    {
      nome: 'ARTPOP',
      audio: '/musicas/artpop.mp3'
    },
    {
      nome: 'Aura',
      audio: '/musicas/aura.mp3'
    },
    {
      nome: 'Starstruck',
      audio: '/musicas/starstruck.mp3'
    },
    {
      nome: 'Heavy Metal Lover',
      audio: '/musicas/heavy-metal-lover.mp3'
    },
    {
      nome: 'Sexxx Dreams',
      audio: '/musicas/sexxx-dreams.mp3'
    },
    {
      nome: 'Gypsy',
      audio: '/musicas/gypsy.mp3'
    },
    {
      nome: 'Enigma',
      audio: '/musicas/enigma.mp3'
    },
    {
      nome: 'Free Woman',
      audio: '/musicas/free-woman.mp3'
    },
    {
      nome: 'Summerboy',
      audio: '/musicas/summerboy.mp3'
    },
    {
      nome: 'Alice',
      audio: '/musicas/alice.mp3'
    },
    {
      nome: 'Plastic Doll',
      audio: '/musicas/plastic-doll.mp3'
    },
    {
      nome: 'Babylon',
      audio: '/musicas/babylon.mp3'
    }
  ]

  const [musicaAtual] = useState(
  obterMusicaDoDia(musicas)
)

  const musicaOntem = obterMusicaDeOntem(musicas)
  const tempos = [1, 5, 10, 15]
  const partesDaBarra = [1, 4, 5, 5]

  const [resposta, setResposta] = useState('')
  const [tentativas, setTentativas] = useState([])
  const [venceu, setVenceu] = useState(false)
  const [faseAtual, setFaseAtual] = useState(0)
  const [progresso, setProgresso] = useState(0)
  const [sugestaoSelecionada, setSugestaoSelecionada] = useState(-1)
  const [tocando, setTocando] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  const hoje = new Date().toISOString().split('T')[0]

const [jaJogouHoje] = useState(
  localStorage.getItem('gagadle-dia-jogado') === hoje
)
  const [tocandoFinal, setTocandoFinal] = useState(false)
  const [estatisticas, setEstatisticas] = useState(() => {
  const salvas = localStorage.getItem('estatisticas-gagadle')


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
  
  


  
  const [mostrarStats, setMostrarStats] = useState(false)
  const audioRef = useRef(null)
  const intervaloRef = useRef(null)
  const intervaloFinalRef = useRef(null)

function tocarMusicaFinal() {
  const audio = audioRef.current
  if (!audio) return

  if (!audio.paused) {
  audio.pause()
  audio.currentTime = 0
  setTocandoFinal(false)
  setTocando(false)

    if (intervaloFinalRef.current) {
      clearInterval(intervaloFinalRef.current)
    }

    return
  }

  audio.play()
  setTocandoFinal(true)

  if (intervaloFinalRef.current) {
    clearInterval(intervaloFinalRef.current)
  }

  intervaloFinalRef.current = setInterval(() => {
    if (audio.currentTime >= 15) {
      audio.pause()
      audio.currentTime = 0
      setTocandoFinal(false)
      clearInterval(intervaloFinalRef.current)
    }
  }, 100)
}

  function tocarTrecho() {
  const audio = audioRef.current
  if (!audio) return

  

  const tempoMaximo = venceu ? 15 : tempos[faseAtual]

  if (!audio.paused) {
    audio.pause()
    setTocando(false)

    if (intervaloRef.current) {
      clearInterval(intervaloRef.current)
    }

    return
  }

  setProgresso(0)
  audio.currentTime = 0
  audio.play()
  setTocando(true)

  if (intervaloRef.current) {
    clearInterval(intervaloRef.current)
  }

  intervaloRef.current = setInterval(() => {
    setProgresso(audio.currentTime)

    if (audio.currentTime >= tempoMaximo) {
      audio.pause()
      audio.currentTime = 0
      setTocando(false)
      clearInterval(intervaloRef.current)
    }
  }, 100)
}

  function calcularPreenchimento(index, parte) {
    const inicioDaParte = partesDaBarra
      .slice(0, index)
      .reduce((total, valor) => total + valor, 0)

    const preenchido = progresso - inicioDaParte

    if (preenchido <= 0) return '0%'
    if (preenchido >= parte) return '100%'

    return `${(preenchido / parte) * 100}%`
  }

  const sugestoes = musicas.filter((musica) => {
    const combinaPesquisa =
      musica.nome.toLowerCase().startsWith(resposta.toLowerCase())

    const jaTentou = tentativas.some(
      (tentativa) =>
        tentativa.nome.toLowerCase() === musica.nome.toLowerCase()
    )

    return combinaPesquisa && !jaTentou
  })

  function enviarResposta(respostaManual = resposta) {
      if (venceu || perdeu) return

  
  const respostaFinal = respostaManual.trim()


  if (respostaFinal === '') return

  const musicaExiste = musicas.some(
    (musica) =>
      musica.nome.toLowerCase() === respostaFinal.toLowerCase()
  )

  if (!musicaExiste) return

  const jaTentou = tentativas.some(
    (t) => t.nome.toLowerCase() === respostaFinal.toLowerCase()
  )

  if (jaTentou) return

  const acertou =
    respostaFinal.toLowerCase() === musicaAtual.nome.toLowerCase()

  const novaTentativa = {
    nome: respostaFinal,
    correto: acertou
  }

  const novasTentativas = [...tentativas, novaTentativa]

setTentativas(novasTentativas)


if (!acertou && novasTentativas.length >= 4) {
  setPerdeu(true)

  localStorage.setItem(
  'gagadle-dia-jogado',
  hoje
)

  setEstatisticas((stats) => {
    const novasStats = {
      ...stats,
      jogos: stats.jogos + 1,
      derrotas: stats.derrotas + 1,
      tentativaDerrota: (stats.tentativaDerrota || 0) + 1,
      sequencia: 0
    }

    localStorage.setItem(
      'estatisticas-gagadle',
      JSON.stringify(novasStats)
    )

    return novasStats
  })
}

  if (!acertou) {
    setFaseAtual((fase) => Math.min(fase + 1, tempos.length - 1))
  }

  if (acertou) {
  setVenceu(true)

  localStorage.setItem(
  'gagadle-dia-jogado',
  hoje
)
  setEstatisticas((stats) => {
    const novaSequencia = stats.sequencia + 1

    const novasStats = {
      ...stats,
      jogos: stats.jogos + 1,
      vitorias: stats.vitorias + 1,
      sequencia: novaSequencia,
      melhorSequencia: Math.max(
        stats.melhorSequencia,
        novaSequencia
      )
    }

    const tentativaAcerto = novasTentativas.length

    if (tentativaAcerto === 1) novasStats.tentativa1++
    if (tentativaAcerto === 2) novasStats.tentativa2++
    if (tentativaAcerto === 3) novasStats.tentativa3++
    if (tentativaAcerto === 4) novasStats.tentativa4++

    localStorage.setItem(
      'estatisticas-gagadle',
      JSON.stringify(novasStats)
    )

    return novasStats
  })
}

  setResposta('')
  audioRef.current.pause()
audioRef.current.currentTime = 0
setTocando(false)
setTocandoFinal(false)
  setSugestaoSelecionada(-1)
}

function compartilharResultado() {
  const numeroDoDia = 1605
  const tentativaAcerto = tentativas.length
  const sequencia = 11

  const linhas = [...tentativas]
  .reverse()
  .map((tentativa) =>
    tentativa.correto ? '🟩🟩🟩🟩' : '🟥🟥🟥🟥'
  )
  .join('\n')

  const texto = ` 👠 joguei gagadle #${numeroDoDia} ${tentativaAcerto}/6 🔥 ${sequencia}

${linhas}`

  navigator.clipboard.writeText(texto)
}
if (jaJogouHoje) {
  return (
    <div className="container">
      <img
        src="/logo.png"
        alt="Gagadle"
        className="logo"
      />

      <div className="vitoria">
        <h2>You already completed today's challenge! 🎉</h2>
        <p>Come back tomorrow for a new song.</p>
      </div>
    </div>
  )
}

  return (
  <div className="container">
    <img
  src="/logo.png"
  alt="Gagadle"
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
        aria-hidden="true"
      >
        
        <path
          d="M13.5 2C14 5 12 6.5 10.5 8C9 9.5 8 11 8 13.5C8 17.1 10.9 20 14.5 20C18.1 20 21 17.1 21 13.5C21 9.5 18.5 6.5 13.5 2Z"
          fill="#ecaad3"
        />
      </svg>

         <svg
        className="streak-fire2"
        viewBox="0 0 24 24"
        aria-hidden="true"
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

<audio
          ref={audioRef}
          src={musicaAtual.audio}
        />
    {!venceu && !perdeu && (
      <>
        

        <div className="controles-audio">
          <button onClick={tocarTrecho}>
            {tocando ? '⏹' : '▶'}
          </button>
          <span className="icone-volume">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            className="volume-slider"
            onChange={(e) => {
              audioRef.current.volume = e.target.value
            }}
          />
        </div>

        <div className="barra-trechos">
          {partesDaBarra.map((parte, index) => (
            <div
              key={index}
              className="trecho-container"
              style={{ flex: parte }}
            >
              <div
                className="trecho-preenchido"
                style={{
                  width: calcularPreenchimento(index, parte)
                }}
              />

              {index === faseAtual && (
                <span>{tempos[faseAtual]}s</span>
              )}
            </div>
          ))}
        </div>

        <div className="form-resposta">
          <div className="campo-resposta">
            <input
              type="text"
              placeholder="Digite uma música..."
              value={resposta}
              onChange={(event) => setResposta(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault()

                  setSugestaoSelecionada((prev) =>
                    prev < sugestoes.length - 1 ? prev + 1 : prev
                  )
                }

                if (event.key === 'ArrowUp') {
                  event.preventDefault()

                  setSugestaoSelecionada((prev) =>
                    prev > 0 ? prev - 1 : 0
                  )
                }

                if (event.key === 'Enter') {
                  event.preventDefault()

                  if (sugestaoSelecionada >= 0) {
                    const musicaSelecionada =
                      sugestoes[sugestaoSelecionada].nome

                    setResposta(musicaSelecionada)
                    enviarResposta(musicaSelecionada)
                  } else {
                    enviarResposta()
                    
                  }
                }
              }}
            />

            {resposta && sugestoes.length > 0 && (
              <div className="sugestoes">
                {sugestoes.map((musica, index) => (
                  <div
                    key={musica.nome}
                    className={
                      index === sugestaoSelecionada
                        ? 'sugestao sugestao-ativa'
                        : 'sugestao'
                    }
                    onClick={() => setResposta(musica.nome)}
                  >
                    {musica.nome}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
  type="button"
  onClick={() => enviarResposta()}
  disabled={venceu || perdeu}
>
  Enviar
</button>
        </div>
      </>
    )}



    {venceu && (
      <div className="vitoria">
        <h2>You got it right! It was {musicaAtual.nome} 🎉</h2>
        <p>You guessed it in {tentativas.length} attempt!</p>

        <button
  onClick={compartilharResultado}
  className="compartilhar-btn"
>
  Compartilhar
</button>

        <img
  src={
    tentativas.length === 1
      ? '/gifs/primeira.gif'
      : '/gifs/vitoria.gif'
  }
  className="gif-vitoria"
  
  

/>







<div className="ouvir-musica-container">
  <button
  type="button"
  className="botao-ouvir"
  onClick={tocarMusicaFinal}
>
  {tocandoFinal ? '⏹' : '▶'}
</button>





</div>


      </div>
    )}
    {perdeu && (
  <div className="derrota">
    <h2>You lost 😢</h2>
    <p>The song was: {musicaAtual.nome}</p>

<button
  onClick={compartilharResultado}
  className="compartilhar-btn"
>
  Compartilhar
</button>

    <img
      src="/gifs/derrota.gif"
      alt="Derrota"
      className="gif-derrota"
    />

    <button
  type="button"
  className="botao-ouvir"
  onClick={tocarMusicaFinal}
>
  {tocandoFinal ? '⏹' : '▶'}
</button>
  </div>
  
  

)}

    <div className="tentativas">
      {[...tentativas].reverse().map((item, index) => (
        <div
          key={index}
          className={item.correto ? 'acerto' : 'erro'}
        >
          {item.nome}
        </div>
      ))}
    </div>

    
{(venceu || perdeu) && (
  <div className="proximo-modo">
    <h2>Next mode:</h2>

    <button onClick={() => navigate('/clipe')}>
      Descobrir Clipe
    </button>
  </div>
)}





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
  <h2><FaChartBar /></h2>

  <div className="stats-top">
    <div>
      <strong>{estatisticas.jogos}</strong>
      <span>games</span>
    </div>

    <div>
      <strong>
  {estatisticas.jogos > 0
    ? Math.round(
        (estatisticas.vitorias / estatisticas.jogos) * 100
      )
    : 0}
%
</strong>
      <span>wins</span>
    </div>

    <div>
      <strong>{estatisticas.sequencia}</strong>

      <span>win streak</span>
    </div>

    <div>
      <strong>{estatisticas.melhorSequencia}</strong>

      <span>best streak</span>
    </div>
  </div>

  <h3></h3>

  <div className="tentativas">
  <div className="linha">
    <span>1</span>
    <div
      className="barra"
      style={{ width: `${(estatisticas.tentativa1 || 0) * 20}px` }}
    >
      {estatisticas.tentativa1 || 0}
    </div>
  </div>

  <div className="linha">
    <span>2</span>
    <div
      className="barra"
      style={{ width: `${(estatisticas.tentativa2 || 0) * 20}px` }}
    >
      {estatisticas.tentativa2 || 0}
    </div>
  </div>

  <div className="linha">
    <span>3</span>
    <div
      className="barra"
      style={{ width: `${(estatisticas.tentativa3 || 0) * 20}px` }}
    >
      {estatisticas.tentativa3 || 0}
    </div>
  </div>

  <div className="linha">
    <span>4</span>
    <div
      className="barra"
      style={{ width: `${(estatisticas.tentativa4 || 0) * 20}px` }}
    >
      {estatisticas.tentativa4 || 0}
    </div>
  </div>

  <div className="linha">
    <span>💀</span>
    <div
      className="barra"
      style={{ width: `${(estatisticas.tentativaDerrota || 0) * 20}px` }}
    >
      {estatisticas.tentativaDerrota || 0}
    </div>
  </div>
</div>
</div>
     
     
    </div>
  </div>
)}
  </div>
  
)
}

export default Musica