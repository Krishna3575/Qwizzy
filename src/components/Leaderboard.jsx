import { useEffect, useState } from 'react'

export default function Leaderboard() {
  const [data, setData] = useState([])
  const [sortBy, setSortBy] = useState('score') // 'score' or 'time'

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('leaderboard')) || []
    setData(saved)
  }, [])

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'score') {
      return b.score - a.score
    } else if (sortBy === 'time') {
      return a.time - b.time
    }
    return 0
  })

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-center mb-6">🏅 Leaderboard</h2>

      <div className="flex justify-end mb-4">
        <label className="mr-2 font-medium">Sort by:</label>
        <select
          className="border p-1 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="score">Score</option>
          <option value="time">Time</option>
        </select>
      </div>

      {sortedData.length === 0 ? (
        <p className="text-center">No scores yet. Be the first to play!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Score</th>
                <th className="border px-2 py-1">Time (s)</th>
                <th className="border px-2 py-1">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td className="border px-2 py-1">{entry.name}</td>
                  <td className="border px-2 py-1">{entry.score} / {entry.total}</td>
                  <td className="border px-2 py-1">{entry.time}</td>
                  <td className="border px-2 py-1">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
