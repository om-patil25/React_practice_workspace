import Btns from "./Btns";
import UsersDBinp from "./UsersDBinp";
import { Plus, Save } from "lucide-react";
const UserForm = ({
  onSubmit,
  setName,
  setUsername,
  setEmail,
  setCountry,
  setPhoto,
  name,
  username,
  email,
  country,
  photo,
  currentId,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-5/6 p-2 rounded-xl flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-1 md:justify-around bg-accent-light dark:bg-card-dark"
    >
      {/* using two way binding */}
      <UsersDBinp
        label={"Name:"}
        type={"text"}
        INPname={"name"}
        placeholder={"Enter your Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UsersDBinp
        label={"Username:"}
        type={"text"}
        name={"username"}
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <UsersDBinp
        label={"Email:"}
        type={"email"}
        name={"email"}
        placeholder={"Enter Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <UsersDBinp
        label={"Country:"}
        type={"text"}
        name={"country"}
        placeholder={"Enter country"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <UsersDBinp
        label={"Photo:"}
        type={"url"}
        name={"photo"}
        placeholder={"Paste link of image"}
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      {/* <UsersDBinp type="submit" />
          <button onClick={handleUpdate}>update</button> */}
      {/* learned solution */}
      <div className="w-full flex justify-center items-center">
        <Btns
          btnName={
            <span className="flex items-center">
              {currentId ? (
                <>
                  <Save />
                  Update
                </>
              ) : (
                <>
                  <Plus />
                  Add
                </>
              )}
            </span>
          }
          type={"submit"}
          btnStyle={
            "w-full md:w-max md:py-1 md:px-2  py-2 text-white bg-accentdeep-light dark:bg-accent-dark hover:bg-accent-light-hover dark:hover:bg-accent-dark-hover text-lg rounded-xl flex justify-center items-center mt-4 cursor-pointer"
          }
        />
      </div>
    </form>
  );
};

export default UserForm;
