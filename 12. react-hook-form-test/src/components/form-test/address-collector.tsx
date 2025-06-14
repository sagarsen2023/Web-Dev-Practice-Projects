"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { FormType } from "@/app/validators/formValidator.schema";

function AddressCollector() {
  const methods = useFormContext<FormType>();

  const { register } = methods;
  return (
    <div>
      <Input {...register("address.city")} placeholder="City" />
      <Input {...register("address.state")} placeholder="State" />
      <Input {...register("address.street")} placeholder="State" />
      <Input
        {...register("address.zip", { valueAsNumber: true })}
        placeholder="Zip Code"
      />
    </div>
  );
}

export default AddressCollector;
