import './App.css'

function App() {

  const welcome = <h1>bem vindo, Kauhe</h1>
  const gostando = true;
  const numero = 1;
  const cursos = ['html','css','js']
  return (
    <>
    {/* comentário ctrl + ; */}
      <div>
        <h1>Aula 01</h1>
        {welcome}
        <h2>Introdução ao React</h2>
        {gostando? 'Estou curtindo' : 'Não estou curtindo'}
        <p className={numero % 2? 'impar' : 'par'}>{numero}</p>
      
        {gostando && 
          <div>
            <h3>eitaaa curso top</h3>
          </div>
        }

      {cursos.map(c => <p>{c}</p>)}
      </div>
      <div>xxxx</div>
    </>
  )
}

export default App
