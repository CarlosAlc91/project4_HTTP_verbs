const UserInfo = ({ user, deleteUser, handlerClickUpdateUser }) => {
  return (
    <article className="grid bg-main max-w-[350px] items-center justify-center mx-auto border border-brdr-input rounded-md">
      <section className="p-4 grid justify-center items-center overflow-hidden">
        <ul className="">
          <li className="font-bold text-2xl line py-4 h-[100px]">
            {user.first_name} {user.last_name}
          </li>

          <hr className="text-brdr-input py-3" />

          <li className="text-brdr-input font-light">
            EMAIL: <br />
            <div className="font-normal text-bg-modal">{user.email}</div>
          </li>

          <li className="text-brdr-input font-light py-3">
            PASSWORD: <br />
            <div className="font-normal text-bg-modal">{user.password}</div>
          </li>
          <li className="text-brdr-input font-light py-3">
            BIRTHDAY: <br />
            <div className="font-normal text-bg-modal">
              <i className="bx bx-gift text-lg pr-1"></i>
              {user.birthday}
            </div>
          </li>
        </ul>
        <hr className="text-brdr-input" />
      </section>

      <div className="flex h-[60px] gap-4 justify-end pr-3 overflow-hidden">
        <button onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash bg-delete text-bg-input p-3 border-[#D85D5D] rounded-lg"></i>
        </button>
        <button onClick={() => handlerClickUpdateUser(user)}>
          <i className="bx bx-edit-alt bg-edit text-brdr-input border-[#BDBDBD] p-3 rounded-lg"></i>
        </button>
      </div>
    </article>
  );
};
export default UserInfo;
