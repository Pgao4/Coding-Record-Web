import React, { useEffect, useState } from 'react'
import "./Home.css"
import { projectFirestore } from '../../firebase/config' 
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(() =>{
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if(snapshot.empty) {
        setError('No recipes to load...')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    //clean function
    return () => unsub()

  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
