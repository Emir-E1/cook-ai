import { ArrowUp } from "lucide-react";

function QuestionCard({ title }) {
  return (
    <div className="   flex items-center max-w-[600px]  gap-10">
      <button className=" p-4 border-2  border-secondary rounded-full">
        <ArrowUp />
      </button>

      <h4>{title}</h4>
    </div>
  );
}

export default QuestionCard;
