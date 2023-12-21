import GifItem from './GifItem'
import useFetchGifs from './hooks/useFetchGifs'

export const GiftGrid = ({ category }) => {

  const {fotos,isLoading} = useFetchGifs (category)

  return (
    <>
    {isLoading && <h2>Loading...</h2>}

      {
        
          <div className='card-grid'>
            {fotos.map((image) => (<GifItem
             key={image.id}
             {...image}
             />))}
          </div>
        

      }


    </>
  )
}
