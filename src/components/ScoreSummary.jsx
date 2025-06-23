import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ScoreSummary() {
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quizResult'))
    if (!data) {
      navigate('/')
    } else {
      setResult(data)
    }
  }, [])

  if (!result) return <p className="text-center mt-10">Loading result...</p>

  const getMessage = (score, total) => {
    const percentage = (score / total) * 100
    if (percentage === 100) return "🎯 Perfect Score! You're a Quiz Champion!"
    if (percentage >= 75) return "🔥 Great Job! You nailed it!"
    if (percentage >= 50) return "💡 Not bad! Try once more for a better score."
    return "☕ More caffeine, maybe? You got this next time!"
  }

  const handleReset = () => {
    localStorage.removeItem('currentPlayer')
    localStorage.removeItem('quizResult')
    navigate('/start')
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/ed/04/6a/ed046a7bcdf65feeaa1dcbd15d2b8f62.jpg')`,
      }}
    >
      <div className="w-full max-w-2xl bg-pink-50 bg-opacity-95 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">🎉 Quiz Summary</h2>

        <div className="space-y-3 text-lg text-gray-700">
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Score:</strong> {result.score} / {result.total}</p>
          <p><strong>Time Taken:</strong> {result.time} seconds</p>
        </div>

        <p className="mt-6 italic text-center text-xl text-purple-700 font-medium">
          {getMessage(result.score, result.total)}
        </p>

        <button
          onClick={handleReset}
          className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-violet-600 transition"
        >
          🔁 Play Again
        </button>
      </div>
    </div>
  )
}
