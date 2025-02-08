"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthSchemaType } from "@/models/schemas/auth.schema";
import UserType from "@/components/user-type.component";

function Page() {
  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
  });
  const { handleSubmit, register, formState } = methods;

  useEffect(() => {
    console.log("FormState Error: ", formState.errors);
  }, [formState]);

  const onSubmit = (data: AuthSchemaType) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-full bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold ">Authentication</h1>
          <p>Check the console to view errors if any</p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("email")}
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("password")}
                type="password"
              />
            </div>
            <UserType name="userType" />
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Page;
