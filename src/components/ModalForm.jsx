import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMPY_FORM_VALUES } from "../shared/constants";

const ModalForm = ({
  isShowModal,
  isUserToBeUpdated,
  createUsers,
  updateUser,
  setIsShowModal,
  setIsUserToBeUpdated,
}) => {
  /* STATES */
  const { handleSubmit, register, reset } = useForm();
  /* HANDLERS */

  const onSubmit = (data) => {
    /*  */
    isUserToBeUpdated ? updateUser(data, reset) : createUsers(data, reset);
  };

  const handlerCloseModal = () => {
    setIsShowModal(false);
    reset(EMPY_FORM_VALUES);
    setIsUserToBeUpdated(null);
  };
  /* EFFECTS */
  useEffect(() => {
    if (isUserToBeUpdated) {
      reset(isUserToBeUpdated);
    }
  }, [isUserToBeUpdated]);

  return (
    <section
      className={`fixed bg-bg-modal/60 top-0 right-0 bottom-0 left-0 flex justify-center items-center font-roboto transition-[opacity_transform] duration-100${
        isShowModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-bg-form w-80 relative grid gap-4 p-4"
      >
        <h2 className=" pt-2 text-3xl font-bold">
          {isUserToBeUpdated ? "Edit user" : "Create user"}
        </h2>

        <button
          onClick={handlerCloseModal}
          className="right-3 top-3 absolute"
          type="button"
        >
          <i className="bx bx-x text-2xl"></i>
        </button>

        <div className="grid">
          <label htmlFor="first_name">Name</label>
          <input
            className="bg-bg-input border-brdr-input p-2 pl-3 text-xs border rounded-md outline-none"
            placeholder="Name"
            type="text"
            id="first_name"
            {...register("first_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="last_name">Last name</label>
          <input
            className="bg-bg-input border-brdr-input p-2 pl-3 text-xs border rounded-md outline-none"
            placeholder="Last name"
            type="text"
            id="last_name"
            {...register("last_name")}
          />
        </div>
        <div className=" grid">
          <label htmlFor="email">email</label>
          <input
            className="bg-bg-input border-brdr-input p-2 pl-3 text-xs border rounded-md outline-none"
            placeholder="email"
            type="text"
            id="email"
            {...register("email")}
          />
        </div>
        <div className=" grid">
          <label htmlFor="password">Password</label>
          <input
            className="bg-bg-input border-brdr-input p-2 pl-3 text-xs border rounded-md outline-none"
            placeholder="Password"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <div className=" grid">
          <label htmlFor="birthday">Birthday</label>
          <input
            className="bg-bg-input border-brdr-input text-brdr-input p-2 pl-3 text-xs uppercase border rounded-md outline-none"
            type="date"
            id="birthday"
            {...register("birthday")}
          />
        </div>

        <button className="bg-button text-bg-form border-brdr-input p-1 border">
          {isUserToBeUpdated ? "Save changes" : "Create user"}
        </button>
      </form>
    </section>
  );
};
export default ModalForm;
