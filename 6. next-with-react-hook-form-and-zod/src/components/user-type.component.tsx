import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function UserType({ name }: { name: string }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue="user" // Set a default value
      render={({ field }) => (
        <div className="py-4">
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-gray-700"
          >
            User Type
          </label>
          <select
            id="userType"
            {...field}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      )}
    />
  );
}

export default UserType;
