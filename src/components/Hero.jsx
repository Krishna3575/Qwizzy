import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/df/21/26/df21260ea57e3fd0ab95ae62802ad932.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0" /> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-white">
        
        {/* Left: Text Section */}
        <div className="text-center md:text-left bg-white/80 text-black p-6 rounded shadow">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Qwizzy!</h1>
          <p className="mb-6">Test your brain and challenge yourself!</p>
          <Link
            to="/start"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-violet-600 transition"
          >
            Start Quiz
          </Link>
        </div>

        {/* Right: Animated Question Mark SVG */}
        <Link to="/about">
        <div className="w-60 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="w-full h-auto animate-question"
          >
            <circle cx="32" cy="32" r="30" fill="#8b5cf6" />
            <path
              d="M32 18c-4.418 0-8 3.582-8 8h4c0-2.21 1.79-4 4-4s4 1.79 4 4c0 4-6 3.5-6 9h4c0-3.5 6-4 6-9 0-4.418-3.582-8-8-8zm0 22a3 3 0 100 6 3 3 0 000-6z"
              fill="white"
            />
          </svg>
        </div>
        </Link>
      </div>
    </div>
  )
}
