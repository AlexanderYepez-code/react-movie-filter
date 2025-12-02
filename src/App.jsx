import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import film from './assets/Film'
import './App.css'

function App() {
  const [select, setselect] = useState("");
  const [filter, setfilter] = useState(film);
  const [newMovie, setNewMovie] = useState('');
  
  useEffect(()=>{
    if (!select.length) {
      setfilter(film);
    }

    if (select.length) {
      const newArray = film.filter((movie)=> movie.genre === select );
      setfilter(newArray);
    }
  }, [select])

  return (
    <section className='container'>
      <h2>Filtro Film</h2>
      <select className="form-select" ria-label="Default select example" onChange={(event)=> setselect(event.target.value)}>
        <option value="">seleziona il genere di Film</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
      </select>
      <form onSubmit={function Sumit(event){
        event.preventDefault();
        setfilter([...filter,newMovie]);
        setNewMovie('');
      }}>
        <input type="text" value={newMovie} onChange={(event)=>{
          setNewMovie(event.target.value)
        }} />
        <button type='submit'>Aggiungi Film</button>
      </form>
      <div className='row' >
        
        {filter.map((item, index)=> (
          <div key={index} className='card col-3 gap-1 mt-5'>
          <h3 className='card-title'>{item.title}</h3>
          <p className='card-subtitle mb-2 text-body-secondary'>{item.genre}</p>
          </div>

        ))}
      </div>


    </section>
  )
}
  export default App
