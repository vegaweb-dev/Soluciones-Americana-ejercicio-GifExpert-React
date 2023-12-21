import { useEffect, useState } from "react"
import { getGifs } from "../../helpers/getGifs"



const useFetchGifs = (category) => {
   const [fotos, setFotos] = useState([])
   const [isLoading , setIsLoading] = useState(true)

  const loadFotos = async () => {
    const newFotos = await getGifs(category)
    setFotos(newFotos)
    setIsLoading(false)
  }

  useEffect(() => {
    loadFotos()
  },
    [])

    return {
        fotos,
        isLoading
    }
}

export default useFetchGifs