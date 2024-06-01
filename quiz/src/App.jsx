import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Start from './components/Start';
import QuizGame from './components/QuizGame';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {quizState.gameStage === "Start" && <Start />}
      {quizState.gameStage === "Playing" && <QuizGame />}
    </div >

  )
}

export default App
