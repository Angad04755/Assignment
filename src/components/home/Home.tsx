import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/slices/UserSlice";
import { GetUsers } from "../../services/GetUsers";
import { type RootState, type AppDispatch } from "../../redux/store";
import { toast } from "sonner";
import UserCard from "../../ui/UserCard";
import SearchBar from "../../components/search/SearchBar";
import FormModal from "./FormModal";
import { Plus } from "lucide-react";
import { BarLoader } from "react-spinners";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(
    (state: RootState) => state.user.user
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true)
        const data = await GetUsers();
        dispatch(SetUser(data));
      } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false)
    }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"})
  }, []);

  if (loading) {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-cyan-200 to-cyan-700">
            <BarLoader color="white"/>
        </main>
    )
  }

  if (!users) {
    return (
      <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-cyan-200 to-cyan-700">
        No users
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-700 px-10">
      <section className="container mx-auto">

        <article className="rounded-b-lg bg-cyan-100 p-4 sticky top-12.5 backdrop-blur-lg flex flex-col gap-4 md:flex-row">

          <h2 className="text-xl text-gray-700 font-semibold">
            Users
          </h2>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />

          <button className="flex w-full bg-green-300 text-gray-900 px-3 py-2 font-semibold cursor-pointer hover:bg-green-400 active:bg-green-500 transition rounded-lg shadow-lg" onClick={() => setOpenModal(true)}>
            <Plus size={25}/>New User
          </button>

        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 pb-10">
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
  {openModal && (
    <FormModal onclose={() => setOpenModal(false)}/>
  )}

      </section>
    </main>
  );
}

export default Home;