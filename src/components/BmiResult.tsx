interface Props {
  bmi: number
}

const BmiResult = ({ bmi }: Props) => {
  const checkBmiResult = () => {
    if (bmi === 0) return '-'
    if (bmi < 18.5) return 'อยู่ในเกณฑ์น้ำหนักน้อย / ผอม'
    if (bmi < 25) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)'
    if (bmi < 30) return 'อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1'
    if (bmi < 35) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
    if (bmi >= 35) return 'อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3'
  }

  const getResultClass = () => {
    if (bmi < 18.5) return 'gray'
    if (bmi < 22.9) return 'green'
    if (bmi < 24.9) return 'yellow'
    return 'red'
  }

  return (
    <div className="result">
      <p>ค่า BMI คือ: {bmi}</p>
      <p>ผลลัพธ์</p>
      <p className={getResultClass()}>{checkBmiResult()}</p>
    </div>
  )
}

export default BmiResult
