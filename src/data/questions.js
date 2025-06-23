const questions = {
  general: {
    easy: [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: "Paris",
      },
      {
        question: "What color are bananas?",
        options: ["Red", "Yellow", "Blue", "Green"],
        answer: "Yellow",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["India", "China", "Japan", "Thailand"],
        answer: "Japan",
      },
      {
        question: "Who is the current President of the United States?",
        options: ["Donald Trump", "Joe Biden", "Barack Obama", "Kamala Harris"],
        answer: "Donald Trump",
      },
      {
        question: "Where is the Taj Mahal located?",
        options: ["Mumbai", "Delhi", "Agra", "Jaipur"],
        answer: "Agra",
      },
    ],
    medium: [
      {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Won", "Yen", "Rupee"],
        answer: "Yen",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which country hosted the G20 Summit in 2023?",
        options: ["USA", "India", "China", "Germany"],
        answer: "India",
      },
      {
        question: "Which two countries are primarily involved in the ongoing conflict that began in 2022?",
        options: ["Russia and Ukraine", "USA and China", "India and Pakistan", "Israel and Iran"],
        answer: "Russia and Ukraine",
      },
      {
        question: "Which company completed the acquisition of Activision Blizzard in 2023?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        answer: "Microsoft",
      },
    ],
    hard: [
      {
        question: "In which year was the UN founded?",
        options: ["1945", "1939", "1919", "1950"],
        answer: "1945",
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
      {
        question: "Which country launched the Chandrayaan-3 lunar mission?",
        options: ["USA", "Russia", "India", "China"],
        answer: "India",
      },
      {
        question: "Which nation recently signed the Abraham Accords with Israel?",
        options: ["Iran", "UAE", "Qatar", "Syria"],
        answer: "UAE",
      },
      {
        question: "Who won the 2024 Indian General Elections?",
        options: ["Congress", "BJP", "AAP", "SP"],
        answer: "BJP",
      },
    ],
  },

  science: {
    easy: [
      {
        question: "What organ pumps blood throughout the human body?",
        options: ["Liver", "Lungs", "Heart", "Kidneys"],
        answer: "Heart",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Water boils at what temperature (°C) at sea level?",
        options: ["100", "0", "50", "212"],
        answer: "100",
      },
      {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "O3", "Ox", "O2"],
        answer: "O",
      },
      {
        question: "Which organ helps in digestion by producing bile?",
        options: ["Liver", "Stomach", "Heart", "Lungs"],
        answer: "Liver",
      },
    ],
    medium: [
      {
        question: "Who proposed the planetary model of the atom?",
        options: ["Rutherford", "Bohr", "Dalton", "Thomson"],
        answer: "Bohr",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: "Newton",
      },
      {
        question: "Which element has the atomic number 6?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Iron"],
        answer: "Carbon",
      },
      {
        question: "What part of the plant carries out photosynthesis?",
        options: ["Roots", "Stems", "Leaves", "Flowers"],
        answer: "Leaves",
      },
      {
        question: "What kind of radiation is used in cancer therapy?",
        options: ["Gamma rays", "X-rays", "UV rays", "Infrared rays"],
        answer: "Gamma rays",
      },
    ],
    hard: [
      {
        question: "Which isotope is commonly used in radiocarbon dating?",
        options: ["Carbon-14", "Carbon-12", "Uranium-238", "Lead-206"],
        answer: "Carbon-14",
      },
      {
        question: "Which scientist introduced the concept of the uncertainty principle?",
        options: ["Einstein", "Schrödinger", "Heisenberg", "Bohr"],
        answer: "Heisenberg",
      },
      {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
        answer: "Cerebellum",
      },
      {
        question: "Which organic compound is the building block of proteins?",
        options: ["Amino acids", "Fatty acids", "Glucose", "Nucleotides"],
        answer: "Amino acids",
      },
      {
        question: "In nuclear fission, what particle initiates the reaction?",
        options: ["Photon", "Proton", "Electron", "Neutron"],
        answer: "Neutron",
      },
    ],
  },

  technology: {
    easy: [
      {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "IBM", "Microsoft", "Google"],
        answer: "Microsoft",
      },
      {
        question: "What does 'www' stand for in a website browser?",
        options: [
          "World Wide Web",
          "World Web Wide",
          "Web World Web",
          "Wired Wide Web",
        ],
        answer: "World Wide Web",
      },
      {
        question: "Which of the following is a programming language?",
        options: ["HTML", "Python", "WiFi", "USB"],
        answer: "Python",
      },
      {
        question: "Which device is used to connect to the Internet wirelessly?",
        options: ["Router", "Scanner", "CPU", "Monitor"],
        answer: "Router",
      },
      {
        question: "Which company owns the Android operating system?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        answer: "Google",
      },
    ],
    medium: [
      {
        question: "What does AI stand for?",
        options: [
          "Artificial Integration",
          "Automated Interface",
          "Artificial Intelligence",
          "Automatic Internet",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "Which language is primarily used for iOS app development?",
        options: ["Swift", "Java", "Kotlin", "C#"],
        answer: "Swift",
      },
      {
        question: "What is Git used for?",
        options: [
          "Database management",
          "Version control",
          "Designing websites",
          "Compiling code",
        ],
        answer: "Version control",
      },
      {
        question: "Which framework is used for building React Native apps?",
        options: ["Flutter", "Angular", "React", "Django"],
        answer: "React",
      },
      {
        question: "Which AI search engine focuses on open-source LLMs?",
        options: ["Perplexity", "DeepSeek", "Bing", "Andi"],
        answer: "DeepSeek",
      },
    ],
    hard: [
      {
        question: "Which protocol is used for secure communication over a network?",
        options: ["HTTP", "FTP", "SMTP", "HTTPS"],
        answer: "HTTPS",
      },
      {
        question: "Which of the following is a compiled programming language?",
        options: ["Python", "JavaScript", "C", "Ruby"],
        answer: "C",
      },
      {
        question: "Which AI framework is developed by Facebook?",
        options: ["TensorFlow", "PyTorch", "Keras", "MXNet"],
        answer: "PyTorch",
      },
      {
        question: "What type of database is MongoDB?",
        options: ["Relational", "NoSQL", "Hierarchical", "Object-oriented"],
        answer: "NoSQL",
      },
      {
        question: "Which company developed the GPT language model?",
        options: ["DeepMind", "NVIDIA", "OpenAI", "Google"],
        answer: "OpenAI",
      },
    ],
  },
};

export default questions
