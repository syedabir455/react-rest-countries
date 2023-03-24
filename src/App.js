import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks=['salman', 'jashim', 'kuber', 'ananta','razzak']
  return (
    <div className="App">
     {
      nayoks.map(nayok=><li>Name:{nayok}</li>)
     }
     {
      nayoks.map(nayok=><Person name={nayok}></Person>)
     }
    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.actress}</p>
    </div>
  )
}

function Friend (props){
  return(
    <div className='container'>
      <h2>Name:{props.name}</h2>
      <p>Actress:{props.actress}</p>
    </div>
  )
}


export default App;
