import { useState } from 'react'
import BmiResult from './components/BmiResult'

import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === 'weight') {
      setWeight(Number(value))
    } else if (name === 'height') {
      setHeight(Number(value))
    }
  }

  const calculateBmi = () => {
    // const bmi = weight / ((height / 100) * (height / 100))

    const bmi = weight / (height / 100) ** 2
    setBmi(bmi)
  }

  return (
    <div className="bmi-app">
      <h1 className="title">BMI Calculator</h1>
      <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <label htmlFor="weight">น้ำหนัก (kg)</label>
      <input type="number" name="weight" onChange={handleOnChange} />

      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input type="number" name="height" onChange={handleOnChange} />

      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>

      <hr />

      <BmiResult bmi={bmi} />
    </div>
  )
}

export default App
