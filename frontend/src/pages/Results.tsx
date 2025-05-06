import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Results() {
  const query = useQuery().get('q') || ''
  const [fact, setFact] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchFact = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:5050/api/fact?q=${query}`)
      setFact(res.data.fact)
    } catch (error) {
      console.error('Error fetching fact:', error)
      setFact('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Here’s a fact about “{query}”</h2>
      {loading ? <p>Loading...</p> : <p>{fact}</p>}
      <button onClick={fetchFact} style={{ marginTop: '1rem' }}>
        🔁 New Fact
      </button>
    </div>
  )
}

export default Results
