import { useEffect, useState } from "react"

const ChangingProgressProvider = ({ values, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setValuesIndex((valuesIndex + 1) % values.length)
    })
    // eslint-disable-next-line
  }, [])

  return children(values[valuesIndex])
}

export default ChangingProgressProvider
