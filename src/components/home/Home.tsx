import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../../redux/slices/UserSlice";
import { GetUsers } from "../../services/GetUsers";
import type { RootState, AppDispatch } from "../../redux/store";

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
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    loadUsers();
  }, [dispatch]);

  if (users.length === 0) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        Loading users...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-700">
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  );
}

export default Home;