import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/slices/UserSlice";
import { GetUsers } from "../../services/GetUsers";
import { type RootState, type AppDispatch } from "../../redux/store";
import { toast } from "sonner";
import UserCard from "../../ui/UserCard";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(
    (state: RootState) => state.user.user
  );

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await GetUsers();
        dispatch(SetUser(data));
      } catch (error) {
          toast.error(error.message);
        }
      }
    loadUsers();
  }, []);

  if (users.length === 0) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        Loading users...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-700 px-10 py-10">
        <section className="container mx-auto">
        <article className="flex flex-row justify-between">
        <h2 className="text-xl text-gray-700 font-semibold">Users</h2>
        <button className="bg-green-300 text-gray-900 px-3 py-2 font-semibold cursor-pointer hover:bg-green-400 active:bg-green-500 transition rounded-lg shadow-lg">Create New User</button>
        </article>
        <article className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-10 pt-10">

      {users.map((user) => (
        <UserCard key={user.id} user={user}/>
      ))}
      </article>
      </section>
    </main>
  );
}

export default Home;