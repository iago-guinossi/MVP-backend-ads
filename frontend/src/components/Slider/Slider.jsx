import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    box-sizing: border-box;
    height: calc(100lvh - 120px);
`

export function Slider({ images }){
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev > images.length - 2 ? 0 : prev + 1) 
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <Image {...images[count]}></Image>
  )
}