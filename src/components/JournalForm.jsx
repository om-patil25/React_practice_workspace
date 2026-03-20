import Btns from "./Btns";
import { Pencil, Save, Plus } from "lucide-react";

const JournalForm = ({
  entryData,
  setEntryData,
  date,
  setDate,
  isInEdit,
  setIsInEdit,
  currentId,
  setCurrentId,
  onAdd,
  onSaveAftEdit,
  reset,
  time,
}) => {
  return (
    <form
      onSubmit={(e) => onAdd(e)}
      className="w-5/6 md:w-8/12 p-2 md:h-11/12 bg-accent-light dark:bg-card-dark rounded-lg flex flex-col justify-center items-center gap-3 md:gap-2"
    >
      <div className="w-full h-max flex justify-between items-center">
        {/* {currentDate.toLocaleTimeString()} */}
        <div className="h-10 bg-white dark:bg-accent-dark flex flex-1 mr-3 justify-center items-center rounded-lg p-2">
          {time}
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-max h-10 bg-white dark:bg-accent-dark flex justify-center items-center p-2 rounded-lg shrink-0"
          />
        </div>
      </div>
      <div className="flex h-max justify-end gap-4 w-full">
        {!isInEdit && currentId && (
          <Btns
            btnName={
              <span className="flex items-center j stify-center gap-1">
                <Pencil /> edit
              </span>
            }
            onClickFunc={() => setIsInEdit(true)}
            btnStyle={
              "px-5 py-3 md:py-1 md:px-3 text-gray-50 bg-accentdeep-light dark:bg-accentdeep-dark text-lg hover:bg-accent-light-hover dark:hover:bg-accent-dark cursor-pointer"
            }
          />
        )}
        {isInEdit && currentId && (
          <Btns
            btnName={
              <span className="flex items-center justify-center gap-1">
                <Save /> save
              </span>
            }
            onClickFunc={onSaveAftEdit}
            btnStyle={
              "px-5 py-3 md:py-1 md:px-3 text-gray-50 bg-accentdeep-light dark:bg-accentdeep-dark text-lg hover:bg-accent-light-hover dark:hover:bg-accent-dark cursor-pointer"
            }
          />
        )}
        {currentId ? (
          <Btns
            btnName={
              <span className="flex items-center justify-center gap-1">
                <Plus /> new
              </span>
            }
            onClickFunc={() => {
              reset();
              setCurrentId(null);
            }}
            btnStyle={
              "px-5 py-3 md:py-1 md:px-3 text-gray-50 bg-accentdeep-light dark:bg-accentdeep-dark text-lg hover:bg-accent-light-hover dark:hover:bg-accent-dark cursor-pointer"
            }
          />
        ) : (
          <Btns
            btnName={
              <span className="flex items-center justify-center gap-1">
                <Plus /> Add
              </span>
            }
            type={"submit"}
            btnStyle={
              "px-5 py-3 md:py-1 md:px-3 text-gray-50 bg-accentdeep-light dark:bg-accentdeep-dark text-lg hover:bg-accent-light-hover dark:hover:bg-accent-dark cursor-pointer"
            }
          />
        )}
      </div>
      <textarea
        name="entry"
        value={entryData}
        readOnly={currentId && !isInEdit}
        onChange={(e) => setEntryData(e.target.value)}
        className="h-96 md:h-10/12 w-full bg-white dark:bg-accent-dark rounded-lg flex justify-center items-center shrink-0 p-2 outline-0"
      ></textarea>
    </form>
  );
};

export default JournalForm;
