export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-pink-100 rounded shadow space-y-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">📘 About This App</h2>

      <p>
        Welcome to <strong>QuizMaster</strong> — a fully interactive quiz app built using <span className="font-semibold">React JS</span> with <span className="font-semibold">Vite</span> and styled using <span className="font-semibold">Tailwind CSS</span>. This project was created as part of a frontend development assignment and focuses on state management, routing, persistence, and user interaction.
      </p>

      <h3 className="text-xl font-semibold mt-6">💻 Tech Stack</h3>
      <ul className="list-disc list-inside ml-4">
        <li>React JS (Vite)</li>
        <li>React Router DOM</li>
        <li>Tailwind CSS</li>
        <li>LocalStorage for persistence</li>
        <li>Pure CSS Animations</li>
      </ul>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <img
          src="https://68.media.tumblr.com/756fa349751ac4d036811af37591961a/tumblr_oi47j57OrC1sotuj5o2_500.gif"
          alt="debugging meme"
          className="rounded shadow"
        />
        
      </div> */}

      {/* <h3 className="text-xl font-semibold mt-6">🎯 What I Learned</h3>
      <ul className="list-disc list-inside ml-4">
        <li>React component structuring and reusability</li>
        <li>How to manage state across components</li>
        <li>Implementing routing and navigation in React</li>
        <li>Using localStorage to store and retrieve data</li>
        <li>Making fully responsive layouts with Tailwind CSS</li>
      </ul> */}

      {/* <h3 className="text-xl font-semibold mt-6">😄 For Fun</h3>
      <p>Here are a few memes that perfectly describe the journey of building this app:</p> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <img
          src="https://68.media.tumblr.com/756fa349751ac4d036811af37591961a/tumblr_oi47j57OrC1sotuj5o2_500.gif"
          alt="debugging meme"
          className="rounded shadow"
        />
        
      </div> */}

      <p className="text-center mt-10 font-semibold text-blue-500"> <strong>Thanks for visiting! 🚀</strong></p>
      <div className="flex justify-center">
  <img
    src="https://i.pinimg.com/originals/19/b1/07/19b10712519fa82fe774c05e12d53d3a.gif"
    alt="css meme"
    className="rounded shadow"
  />
</div>

    </div>
  )
}
