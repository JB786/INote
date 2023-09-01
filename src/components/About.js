import React, {useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

function About() {

  const a = useContext(noteContext);

  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])


  return (
    <div>
      <h1>About {a.state.name} who's in class {a.state.class}</h1>
    </div>
  )
}

export default About



// we can also use function which is passed as context in component