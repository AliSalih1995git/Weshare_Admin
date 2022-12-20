import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

function Table() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState({
    id: "",
    status: false,
  });
  const [block, setBlock] = useState(false);
  const [open, setOpen] = useState(false);

  const getUser = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getAllUsers`
    );
    setUsers(res.data);
  };

  useEffect(() => {
    getUser();
  }, [block]);

  async function userBlock(id) {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/blockUser/${id}`
    );
    setBlock(!block);
    setOpen(false);
    return res.data;
  }
  async function userUnblock(id) {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/unBlockUser/${id}`
    );
    setBlock(!block);
    setOpen(false);
    return res.data;
  }
  const handleClick = () => {
    userId.status ? userUnblock(userId.id) : userBlock(userId.id);
  };

  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-dark-purple">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      SI NO
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img
                          src={user.picture}
                          class="rounded-full w-12"
                          alt="Avatar"
                        />
                      </td>
                      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.username}
                      </td>
                      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td class="flex justify-center item-center space-x-4 mt-1">
                        {user.isBlock ? (
                          <button
                            className="px-6 py-2 text-white font-normal bg-blue-600 rounded-lg"
                            onClick={() => {
                              setUserId({ id: user._id, status: true });
                              setOpen(true);
                            }}
                          >
                            Un Block
                          </button>
                        ) : (
                          <button
                            className="px-6 py-2 text-white font-normal bg-dark-purple rounded-lg"
                            onClick={() => {
                              setUserId({ id: user._id, status: false });
                              setOpen(true);
                            }}
                          >
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal open={open} close={() => setOpen(false)}>
                <h1 className="pb-5 text-2xl font-medium">Are you Sure?</h1>
                <hr />
                <div className="text-right space-x-5 pt-5">
                  <button
                    className="bg-stone-500 py-2 px-4 rounded-md text-white hover:bg-stone-600"
                    onClick={() => setOpen(false)}
                  >
                    close
                  </button>
                  <button
                    className="bg-sky-600 py-2 px-4 rounded-md text-white hover:bg-sky-700"
                    onClick={handleClick}
                  >
                    save
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
