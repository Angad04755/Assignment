import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/slices/UserSlice";
import { GetUsers } from "../../services/GetUsers";
import { type RootState, type AppDispatch } from "../../redux/store";
import { toast } from "sonner";
import UserCard from "../../ui/UserCard";
import SearchBar from "../../components/search/SearchBar";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(
    (state: RootState) => state.user.user
  );

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await GetUsers();
        dispatch(SetUser(data));
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };

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

        <article className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <h2 className="text-xl text-gray-700 font-semibold">
            Users
          </h2>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />

          <button className="bg-green-300 text-gray-900 px-3 py-2 font-semibold cursor-pointer hover:bg-green-400 active:bg-green-500 transition rounded-lg shadow-lg">
            Create New User
          </button>

        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
  {searchQuery ? (
    users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
      <UserCard key={user.id} user={user} />
    ))
  ) : (
    users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))
  )}
</article>

      </section>
    </main>
  );
}

export default Home;