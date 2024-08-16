import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Start from './components/Start';
import QuizGame from './components/QuizGame';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="main flex justify-center">
      {quizState.gameStage === "Start" && <Start />}
      {quizState.gameStage === "Playing" && <QuizGame />}
      {quizState.gameStage === "End" && <GameOver />}
    </div >

  )
}

export default App
