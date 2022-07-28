import React from 'react'
import ReactDom from 'react-dom'
import oneImg from '../assets/one.jpeg'
import software from '../assets/Software-icon.svg'
import './test.css';

const Test = () => {
  return (
    <>
      <h2>Hello React</h2>
      <h2>Webpack demo</h2>
      <img src={oneImg} alt="image" />
      <br />
      <br />
      <img src={software} alt="image" />
    </>
  )
}

if(module.hot){
    module.hot.accept()
}

ReactDom.render(<Test />, document.getElementById('root'))