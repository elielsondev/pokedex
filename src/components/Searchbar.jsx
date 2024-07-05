import {useState} from "react";

function Searchbar() {
  const [search, setSearch] = useState('dito')
  
  const onChangeHandler = (e) => {
    console.log('Change Text:', e.target.value);
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    console.log('Click Button:', search)
  }

  return (
    <div className="searchbar-container" >
      <div className="searchbar" >
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  )
}

export default Searchbar;