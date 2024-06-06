import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Start from './components/Start';
import QuizGame from './components/QuizGame';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, []);

  return (
    <div className="flex justify-center w-full">
      {quizState.gameStage === "Start" && <Start />}
      {quizState.gameStage === "Playing" && <QuizGame />}
      {quizState.gameStage === "End" && <GameOver />}
    </div >

  )
}

export default App
