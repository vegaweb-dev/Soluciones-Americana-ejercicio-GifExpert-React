import React, { useState } from 'react'
import { AddCategory,GiftGrid } from './components'

const GiftExpertReact = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }






  return (
    <>
      <h1>GiftExpertReact</h1>
      <AddCategory onNewCategory={onAddCategory} />


      {

        categories.map((category) => <GiftGrid key={category} category={category} />

        )



      }



    </>
  )
}

export default GiftExpertReact