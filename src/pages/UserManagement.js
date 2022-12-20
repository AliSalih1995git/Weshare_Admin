import React from "react";
import Table from "../components/Table";

function UserManagement() {
  console.log("hai");
  return (
    <div className="p-7 flex-1 h-screen ">
      <h1 className="text-2xl font-semibold">User Management</h1>
      <Table />
    </div>
  );
}

export default UserManagement;
