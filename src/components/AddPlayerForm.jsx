import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddPlayerForm() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const playerData = {
      name,
      category,
      difficulty,
      startTime: Date.now(),
    }

    // Save to localStorage
    localStorage.setItem('currentPlayer', JSON.stringify(playerData))

    // Redirect to quiz
    navigate('/quiz/start')
  }

  const isDisabled = !name || !category || !difficulty

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50"style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWRLmdexcNw5cfBC8E7c1tRsTArz50VX6Xza8k2GSrsR3sroksNG8t9uX8PWKLrNVokw&usqp=CAU')`,
      }}>
         {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-6 z-0" /> */}
    <form
      onSubmit={handleSubmit}
      className=" mx-auto bg-pink-200 p-6 rounded shadow-md space-y-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold text-center">Enter Player Details</h2>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">Technology</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Difficulty</label>
        <select
          className="w-full border p-2 rounded"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Intermediate</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full py-2 px-4 rounded text-white ${
          isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        Start Quiz
      </button>
    </form>
    </div>
  )
}
