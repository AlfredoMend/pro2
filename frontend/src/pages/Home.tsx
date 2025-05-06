import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      navigate(`/results?q=${input}`)
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🐾 Animal Fact Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an animal (e.g. cat)"
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <button
          type="submit"
          style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
        >
          Get Fact
        </button>
      </form>
    </div>
  )
}

export default Home
