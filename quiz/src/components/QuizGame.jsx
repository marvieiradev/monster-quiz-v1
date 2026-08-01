import { useContext, useEffect, useMemo, useCallback } from "react";
import { QuizContext } from "../context/quiz";
import useImagePreload from "../hooks/useImagePreload";
import ImageCache from "./ImageCache";
import Option from "./Option";
import Modal from "./Modal";
import Logo from "/logo_quiz.webp";

import Header from "./Header";
import ProgressBar from "./ProgressBar";
import MonsterCard from "./MonsterCard";
import OptionsList from "./OptionsList";

const QuizGame = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const baseURL = "/monsters/";
  const currentQuestion = useMemo(() => {
    return quizState.questions[quizState.currentQuestion];
  }, [quizState.questions, quizState.currentQuestion]);

  const onSelectOption = useCallback(
    (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: {
          answer: currentQuestion.options[currentQuestion.answer - 1],
          option,
        },
      });
    },
    [dispatch, currentQuestion],
  );

  const gameQuestions = quizState.questions.slice(0, quizState.maxQuestions);
  useImagePreload(gameQuestions);

  useEffect(() => {
    const next = gameQuestions[quizState.currentQuestion + 1];
    if (!next) return;
    const img = new Image();
    img.src = `/monsters/big/${next.id}.webp`;
    img.decode().catch(() => {});
  }, [quizState.currentQuestion]);

  useEffect(() => {
    ["/light.webp", "/empty-big.webp", "/error.webp"].forEach(
      (src) => {
        const img = new Image();
        img.src = src;
      },
    );
  }, []);

  var perc = quizState.currentQuestion + 1;
  return (
    <>
      <ImageCache questions={gameQuestions} />
      <div className="app flex flex-col items-center w-full justify-center h-[100vh] relative sm:w-[500px] xl:w-[800px]">
        <div className="content-quiz rounded-lg m-10 w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-6">
          <span className="v-line absolute left-0 block"></span>
          <span className="v-line absolute right-0 rotate-180 block"></span>
          <Header />
          <ProgressBar
            currentQuestion={quizState.currentQuestion}
            maxQuestions={quizState.maxQuestions}
          />
          <MonsterCard id={currentQuestion.id} />
          <OptionsList
            options={currentQuestion.options}
            disabled={quizState.answerSelected}
            onSelectOption={onSelectOption}
          />
        </div>
      </div>

      <Modal
        modal={quizState.modal}
        open={quizState.modal.open}
        click={() =>
          dispatch({
            type: "CHANGE_QUESTION",
          })
        }
        image={quizState.modal.image}
        bg_image={quizState.modal.bgImage}
        mesage={quizState.modal.title}
        name={quizState.modal.subtitle}
      />
    </>
  );
};

export default QuizGame;
