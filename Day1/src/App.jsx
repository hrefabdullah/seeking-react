import React, { useState } from 'react';

function App() {

  var nameArr = ['Haider', 'Abdullah', 'Danish', 'Faizan', 'Azhar', 'Yahya', 'Izhan', 'Ibrahim', 'Haris']
  console.log(nameArr.length)
  const [i, SetI] = useState(0)
  const [a, SetA] = useState(nameArr[i])
  

  return (
    <div id='card'>
      <h1>Hello <p id='data'>{a}</p></h1>
      <p >Welcome to your first <b>ReactRegain</b> project</p>
      <button onClick={() => {
        SetA(nameArr[i])
        var num = Math.floor(Math.random()*nameArr.length)
        SetI(num)
      }}>Change User</button>
    </div>
  )

}

export default App;