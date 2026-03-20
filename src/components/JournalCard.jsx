import Btns from "./Btns";
import MetaData from "./MetaData";
import { Trash2 } from "lucide-react";

const JournalCard = (props) => {
  return (
    <div
      className="bg-accent-light dark:bg-card-dark h-max w-5/6 md:w-4/6 rounded-xl p-3 m-1 cursor-pointer dark:hover:shadow-accent-dark hover:shadow-lg"
      onClick={() => props.onView(props.entry)}
    >
      <p className="line-clamp-2 text-lg">{props.entry.entryData}</p>
      <div className="flex gap-2.5 relative p-2 items-center">
        <MetaData data={props.entry.time} />
        <MetaData data={props.entry.date} />
        <Btns
          btnName={<Trash2 />}
          onClickFunc={() => props.onDelete(props.entry)}
          btnStyle={"absolute right-1 hover:bg-card-light dark:hover:bg-accent-dark cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default JournalCard;
