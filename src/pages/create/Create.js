import { useState, useRef, useEffect } from 'react'
import { useFetch} from '../../hooks/useFetch'
import { useHistory} from "react-router-dom"
// styles
import './Create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  useEffect(() => {
    if (data) {
        // history.goBack()
        history.push('/')

    }
  }, [data, history])

  return (
    <div className='create'>
      <h2 className="page-title">Add a New Solution</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Question Number and Title:</span>
          <input 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
           />
        </label>

        <label>
          <span>Related Topics:</span>
          <div className="ingredients">
            <input 
            type="text" 
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient} 
            ref={ingredientInput} 
            />
            <button className="btn" onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>Current topics: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Your Solution:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Levels:</span>
          <input 
            type="text" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
