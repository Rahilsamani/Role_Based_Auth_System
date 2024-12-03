import axios from "axios";

export const fetchUsers = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/user/allUsers",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const banUser = async (userId, token) => {
  try {
    await axios.post(
      `http://localhost:4000/api/v1/user/ban/${userId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error("Error banning user:", error);
  }
};

export const changeUserRole = async (userId, newRole, token, user) => {
  try {
    await axios.post(
      `http://localhost:4000/api/v1/user/changeRole/${userId}`,
      { role: newRole, user },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error(
      "Error changing user role:",
      error.response?.data || error.message
    );
  }
};
