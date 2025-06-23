import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import questionsData from '../data/questions'

export default function QuizEngine() {
  const navigate = useNavigate()
  const player = JSON.parse(localStorage.getItem('currentPlayer'))
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [userAnswers, setUserAnswers] = useState([])
  const [quizFinished, setQuizFinished] = useState(false)

  useEffect(() => {
    if (!player) {
      navigate('/start')
    } else {
      const loadedQuestions =
        questionsData[player.category]?.[player.difficulty] || []
      setQuestions(loadedQuestions)
    }
  }, [])

  useEffect(() => {
    if (quizFinished || !questions.length) return
    if (timeLeft === 0) {
      handleNext()
      return
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, current])

  const handleOptionClick = (option) => {
    if (selected) return
    setSelected(option)

    const correct = questions[current].answer
    if (option === correct) {
      setScore(score + 1)
    }

    const answerData = {
      question: questions[current].question,
      selected: option,
      correct,
      isCorrect: option === correct,
      timeUsed: 15 - timeLeft,
    }

    setUserAnswers([...userAnswers, answerData])
  }

  const handleNext = () => {
    setSelected(null)
    setTimeLeft(15)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      finishQuiz()
    }
  }

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setSelected(userAnswers[current - 1]?.selected || null)
    }
  }

  const finishQuiz = () => {
    const endTime = Date.now()
    const totalTime = Math.floor((endTime - player.startTime) / 1000)

    const summary = {
      name: player.name,
      score,
      total: questions.length,
      time: totalTime,
      date: new Date().toLocaleString(),
    }

    // Save to leaderboard
    const prev = JSON.parse(localStorage.getItem('leaderboard')) || []
    localStorage.setItem('leaderboard', JSON.stringify([...prev, summary]))

    // Save for summary screen
    localStorage.setItem('quizResult', JSON.stringify(summary))

    setQuizFinished(true)
    navigate('/score')
  }

  if (!questions.length) {
    return <p className="text-center mt-10">Loading quiz...</p>
  }

  const currentQ = questions[current]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50"style={{
        backgroundImage: `url('https://imgflip.com/s/meme/Computer-Guy.jpg')`,
      }}>
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-50"> */}
    <div className="bg-white p-6 rounded shadow max-w-xl w-full" >
      <h2 className="text-xl font-semibold mb-2">Question {current + 1} of {questions.length}</h2>
      <p className="mb-4 font-medium">{currentQ.question}</p>

      <div className="space-y-2">
        {currentQ.options.map((opt, i) => (
          <button
            key={i}
            className={`w-full p-2 rounded border ${
              selected === opt
                ? opt === currentQ.answer
                  ? 'bg-green-200'
                  : 'bg-red-200'
                : 'hover:bg-gray-300'
            }`}
            onClick={() => handleOptionClick(opt)}
            disabled={!!selected}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={handleBack} disabled={current === 0} className="px-4 py-2 bg-gray-300 rounded">
          ⬅ Back
        </button>

        <p className="text-red-500 font-bold">⏱️ {timeLeft}s</p>

        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">
          {current + 1 === questions.length ? "Finish" : "Next ➡"}
        </button>
      </div>
    </div>
    {/* </div> */}
    </div>
  )
}
