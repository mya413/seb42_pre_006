import QuestionBodyTxt from "./QuestionBodyTxt";
import QuestionTags from "./QuestionTags";
import QuestionBodyBtns from "./QuestionBodyBtns";
import QuestionUserinfo from "./QuestionUserinfo";

function QuestionBody() {
  return (
    <div className=" mt-5 flex flex-col">
      <QuestionBodyTxt />
      <QuestionTags />
      <div className="flex justify-between mt-7">
        <QuestionBodyBtns />
        <QuestionUserinfo />
      </div>
    </div>
  );
};

export default QuestionBody;
