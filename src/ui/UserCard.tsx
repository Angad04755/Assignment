import { type userType } from "../types/userType";
import { useNavigate } from "react-router-dom";
interface UserCardProps {
  user: userType;
}

function UserCard({ user }: UserCardProps) {
    const naviagate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-lg transition p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-600">
        {user.name}
      </h2>

      <div className="mt-4 space-y-3 text-sm text-gray-600">
        <div>
          <span className="font-semibold text-gray-600">Email:</span>
          <p>{user.email}</p>
        </div>

        <div>
          <span className="font-semibold text-gray-600">Phone:</span>
          <p>{user.phone}</p>
        </div>

        <div>
          <span className="font-semibold text-gray-600">Company:</span>
          <p>{user.company.name}</p>
        </div>
        <span className="cursor-pointe text-gray-700 hover:text-blue-400 font-semibold cursor-pointer transition" onClick={() =>naviagate(`/users/${user.id}`) }>View Details</span>
      </div>
    </div>
  );
}

export default UserCard;