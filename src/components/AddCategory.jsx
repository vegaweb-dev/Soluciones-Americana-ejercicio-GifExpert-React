import { useState } from 'react'

export const AddCategory = ({  onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }



    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Buscar gifs" />
            <button>Enviar</button>
        </form>
    )
}
