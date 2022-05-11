import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'
import TextField from '@mui/material/TextField';

function App() {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)

  const onWidth = (e) => {
    setWidth(e.target.value)
  }

  const onHeigth = (e) => {
    setHeight(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <Card widths={width} heights={height} />
          <Card widths={width} heights={height} />
          <Card widths={width} heights={height} />
        </div>
        <div style={{ margin: "10px" }}>
          <TextField style={{ margin: "10px" }} label="Input Width" variant="outlined" onChange={onWidth} />
          <TextField style={{ margin: "10px" }} label="Input Height" variant="outlined" onChange={onHeigth} />
        </div>
      </header>
    </div >
  )
}

export default App
