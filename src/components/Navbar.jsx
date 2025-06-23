import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
  <nav className="fixed top-0 left-0 w-full bg-black text-white shadow z-50">
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <Link to="/" className="font-bold text-xl">Qwizzy</Link>
      <div className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/start">Start Quiz</Link>
        <Link to="/score">Score</Link>
        <Link to="/about">About</Link>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
    </div>
    {open && (
      <div className="md:hidden px-4 pb-4 bg-red-300 backdrop-blur-3xl">
        <Link to="/" className="block py-1">Home</Link>
        <Link to="/start" className="block py-1">Start Quiz</Link>
        <Link to="/score" className="block py-1">Scores</Link>
        <Link to="/about" className="block py-1">About</Link>
      </div>
    )}
  </nav>
  )
}