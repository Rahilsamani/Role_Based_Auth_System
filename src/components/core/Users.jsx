import ConfirmationModal from "../common/ConfirmationModal";
import { banUser, changeUserRole, fetchUsers } from "../../services/userAPI";
import { useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import { FaBan } from "react-icons/fa";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        const result = await fetchUsers(token);
        setUsers(result);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, [token]);

  const handleUserBan = async (userId) => {
    try {
      setLoading(true);
      await banUser(userId, token);
      const result = await fetchUsers(token);
      setUsers(result);
    } catch (error) {
      console.error("Error banning user:", error);
    } finally {
      setLoading(false);
      setConfirmationModal(null);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      setLoading(true);
      await changeUserRole(userId, newRole, token, user);
      const result = await fetchUsers(token);
      setUsers(result);
    } catch (error) {
      console.error("Error changing user role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-4xl font-bold text-center text-blue">
        Manage Users
      </h1>
      <Table className="w-full overflow-hidden rounded-lg shadow-md border">
        <Thead className="bg-black text-white">
          <Tr>
            <Th className="px-4 text-center py-2 text-md font-semibold border-white border-r-[1px]">
              Profile
            </Th>
            <Th className="px-4 text-center py-2 text-md font-semibold border-white border-r-[1px]">
              Name
            </Th>
            <Th className="px-4 text-center py-2 text-md font-semibold border-white border-r-[1px]">
              Email
            </Th>
            <Th className="px-4 text-center py-2 text-md font-semibold border-white border-r-[1px]">
              Role
            </Th>
            <Th className="px-4 text-center py-2 text-md font-semibold">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.length === 0 ? (
            <Tr>
              <Td
                colSpan="5"
                className="py-10 text-center text-2xl font-medium text-black"
              >
                No users found
              </Td>
            </Tr>
          ) : (
            users.map((userItem) => (
              <Tr
                key={userItem._id}
                className="hover:bg-gray-100 border-b border-cyan-900"
              >
                <Td className="px-4 py-3">
                  <img
                    src={userItem.image || "/default-profile.png"}
                    alt={`${userItem.firstName} ${userItem.lastName}`}
                    className="h-20 w-20 object-cover"
                  />
                </Td>
                <Td className="px-4 py-3">
                  <p className="text-sm font-medium text-black">
                    {userItem.firstName} {userItem.lastName}
                  </p>
                </Td>
                <Td className="px-4 py-3 text-sm font-medium text-black">
                  {userItem.email}
                </Td>
                <Td className="px-4 py-3 text-sm font-medium text-black">
                  {userItem.role}
                </Td>
                <Td className="px-4 py-3 gap-x-4 border-none flex justify-between items-center my-5">
                  {user?.role === "Admin" && (
                    <select
                      className="rounded px-2 py-1"
                      value={userItem.role}
                      disabled={loading}
                      onChange={(e) =>
                        handleRoleChange(userItem._id, e.target.value)
                      }
                    >
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  )}

                  <button
                    disabled={loading}
                    title="Ban User"
                    className="text-red-600 transition-all duration-200 hover:scale-110"
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to ban this user?",
                        text2:
                          "The user will no longer be able to access their account.",
                        btn1Text: !loading ? "Ban" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleUserBan(userItem._id)
                          : () => {},
                        btn2Handler: () => setConfirmationModal(null),
                      });
                    }}
                  >
                    <FaBan size={20} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Users;
