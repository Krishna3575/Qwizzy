import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AddPlayerForm from './components/AddPlayerForm'
import QuizEngine from './components/QuizEngine'
import ScoreSummary from './components/ScoreSummary'
import Leaderboard from './components/Leaderboard'
import AboutPage from './components/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 px-4 py-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/start" element={<AddPlayerForm />} />
          <Route path="/quiz/start" element={<QuizEngine />} />
          <Route path="/score" element={<ScoreSummary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
