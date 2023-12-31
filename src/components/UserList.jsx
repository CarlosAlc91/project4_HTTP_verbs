import UserInfo from "./UserInfo";

const UserList = ({ users, deleteUser, handlerClickUpdateUser }) => {
  console.log(users);
  return (
    <section className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mx-auto py-4">
      {users.map((user) => (
        <UserInfo
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handlerClickUpdateUser={handlerClickUpdateUser}
        />
      ))}
    </section>
  );
};
export default UserList;
