import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import UserList from "./components/UserList";
import { EMPY_FORM_VALUES } from "./shared/constants";
import { set } from "react-hook-form";

const URL_BASE = "https://users-crud.academlo.tech/";

function App() {
  /* STATES */
  const [isShowModal, setIsShowModal] = useState(false);
  const [isUserToBeUpdated, setIsUserToBeUpdated] = useState(null);
  const [users, setUsers] = useState([]);
  /* FUNCTIONS, HANDLERS */
  /* CRUD */
  const getAllUsers = () => {
    axios
      .get(URL_BASE + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUsers = (newUser, reset) => {
    axios
      .post(URL_BASE + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPY_FORM_VALUES);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(URL_BASE + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdate) => {
    axios
      .put(URL_BASE + `users/${isUserToBeUpdated.id}/`, userUpdate)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(EMPY_FORM_VALUES);
        setIsUserToBeUpdated(null);
      })
      .catch((err) => console.log(err));
  };

  const handlerOpenModal = () => {
    setIsShowModal(true);
  };

  const handlerClickUpdateUser = (user) => {
    setIsShowModal(true);
    setIsUserToBeUpdated(user);
  };

  /* EFFECTS */
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between px-5 py-7 font-roboto font-light">
        <h1 className="text-6xl font-bold self-end">Users</h1>
        <button
          onClick={handlerOpenModal}
          className="flex items-center space-x-2 bg-button text-bg-input px-6 py-1 text-base font-medium"
          type="button"
        >
          <i className="bx bx-plus text-2xl"></i>
          <span>Create new user</span>
        </button>
      </div>

      <ModalForm
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        createUsers={createUsers}
        isUserToBeUpdated={isUserToBeUpdated}
        updateUser={updateUser}
        setIsUserToBeUpdated={setIsUserToBeUpdated}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handlerClickUpdateUser={handlerClickUpdateUser}
      />
    </section>
  );
}

export default App;
