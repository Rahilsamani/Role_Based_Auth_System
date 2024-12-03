import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const userId = user ? user._id : null;

  useEffect(() => {
    if (!userId) {
      setError("No user ID found.");
      setLoading(false);
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://rbac-auth-backend.onrender.com/api/v1/user/userDetails/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserDetails(response.data.user);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg font-medium">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500 font-medium">{error}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <div className="flex flex-col items-center">
          <img
            src={userDetails?.image}
            alt="User Profile"
            className="w-36 h-36"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            {userDetails?.firstName} {userDetails?.lastName}
          </h2>
          <p className="text-gray-500">{userDetails?.email}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Profile Details</h3>
          <div className="mt-4">
            <div className="flex justify-between text-gray-600">
              <span className="font-medium">First Name:</span>
              <span>{userDetails?.firstName}</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <span className="font-medium">Last Name:</span>
              <span>{userDetails?.lastName}</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <span className="font-medium">Email:</span>
              <span>{userDetails?.email}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => alert("Edit Profile Coming Soon!")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
