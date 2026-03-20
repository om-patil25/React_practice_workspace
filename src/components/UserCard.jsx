import { Pencil, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import Btns from "./Btns";
const UserCard = ({ user, onDelete, onEdit, onView }) => {
  return (
    <motion.div
      key="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => onView(user)}
      className="flex items-center w-11/12 md:w-72 bg-accent-light dark:bg-card-dark dark:hover:shadow-accent-dark hover:shadow-lg rounded-xl p-1 cursor-pointer"
    >
      <div className="w-28 shrink-0 p-1">
        <img
          className="w-auto"
          src={user.photo || "../public/imgs/Designer.png"}
          alt={user.name}
        />
      </div>
      <div className="flex flex-col overflow-hidden p-1 gap-1">
        <div className="w-full m-1">
          <p className="line-clamp-1">Name: {user.name}</p>
          <p className="line-clamp-1">Username:{user.username}</p>
          <p className="line-clamp-1">Email: {user.email}</p>
          <p className="line-clamp-1">Country: {user.country}</p>
        </div>

        <div className="flex justify-evenly items-center">
          <Btns
            btnName={
              <span className="flex">
                <Pencil size={20} /> edit
              </span>
            }
            btnStyle={
              "p-2 text-sm bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover cursor-pointer"
            }
            onClickFunc={() => onEdit(user)}
          />

          <Btns
            btnName={
              <span className="flex">
                <Trash2 size={20} /> delete
              </span>
            }
            btnStyle={
              "p-2 text-sm bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover cursor-pointer"
            }
            onClickFunc={() => onDelete(user.id)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;
