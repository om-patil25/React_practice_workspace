import { Pencil, Trash2, X } from "lucide-react";
import { motion } from "motion/react";
import Btns from "./Btns";
const UserModal = ({ user, onClose, isOpen, onEdit, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      className="h-full flex justify-center items-center"
    >
      <div className="min-w-5/6 max-w-11/12 min-h-3/6 bg-accent-light dark:bg-card-dark rounded-xl p-3">
        <div className="flex p-1 relative">
          <div className="absolute top-2 right-2">
            <Btns btnName={<X size={30} />} onClickFunc={onClose} btnStyle={"cursor-pointer"}/>
          </div>
          <div className="w-44 shrink-0 rounded-xl">
            <img
              className="w-auto rounded-xl"
              src={user.photo}
              alt={user.name}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="break-all p-2">ID: {user.id}</p>
          </div>
        </div>
        <div>
          <div className="p-3 leading-10 text-xl ">
            <p className="break-all">Name: {user.name}</p>
            <p className="break-all">Username:{user.username}</p>
            <p className="break-all">Email: {user.email}</p>
            <p className="break-all">Country: {user.country}</p>
          </div>
          <div className="text-xl flex justify-evenly">
            <Btns
              btnName={
                <span className="flex items-center gap-2">
                  <Pencil size={20} /> edit
                </span>
              }
              onClickFunc={() => {
                onEdit(user);
              }}
              btnStyle={
                "h-max p-2 bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover text-white dark:text-gray-50 rounded-lg cursor-pointer"
              }
            />

            <Btns
              btnName={
                <span className="flex items-center gap-2">
                  <Trash2 size={20} /> delete
                </span>
              }
              onClickFunc={() => {
                onDelete(user.id);
              }}
              btnStyle={
                "h-max p-2 bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover text-white dark:text-gray-50 rounded-lg cursor-pointer"
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserModal;
