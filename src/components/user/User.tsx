import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetUserById } from "../../services/GetUserById";
import { type userType } from "../../types/userType";
import { ArrowLeft } from "lucide-react";

function User() {
  const { id } = useParams();

  const [user, setUser] = useState<userType | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (!id) return;

        const data = await GetUserById(Number(id));
        setUser(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-200 to-cyan-700">
        <h1 className="text-xl font-semibold text-white">Loading...</h1>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-200 to-cyan-700">
        
        <h1 className="text-xl font-semibold text-red-500 bg-white px-5 py-5 rounded-lg">
          User not found
        </h1>
      </main>
    );
  }

  return (

    <main className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-700 p-6">
    <section>
        <ArrowLeft size={28} className="cursor-pointer bg-white rounded-full px-1 py-1" onClick={() => navigate(-1)}/>
        <article className="pt-5">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          {user.name}
        </h1>

        <div className="space-y-4">

          <div>
            <span className="font-semibold">Username:</span> {user.username}
          </div>

          <div>
            <span className="font-semibold">Email:</span> {user.email}
          </div>

          <div>
            <span className="font-semibold">Phone:</span> {user.phone}
          </div>

          <div>
            <span className="font-semibold">Website:</span> {user.website}
          </div>

          <div>
            <span className="font-semibold">Company:</span> {user.company.name}
          </div>

          <div>
            <span className="font-semibold">Catch Phrase:</span>{" "}
            {user.company.catchPhrase}
          </div>

          <div>
            <span className="font-semibold">Business:</span>{" "}
            {user.company.bs}
          </div>

          <div>
            <span className="font-semibold">Address:</span>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>

          <div>
            <span className="font-semibold">Geo Location:</span>
            <p>Latitude: {user.address.geo.lat}</p>
            <p>Longitude: {user.address.geo.lng}</p>
          </div>

        </div>
      </div>
      </article>
      </section>
    </main>
  );
}

export default User;