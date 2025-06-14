"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormType } from "@/app/validators/formValidator.schema";
import AddressCollector from "./address-collector";

function FormInputForDistributor() {
  const methods = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormType) => {
    console.log("Form submitted with data:", data);
  };

  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  return (
    <div>
      <FormProvider {...methods}>
        <Input {...register("distributor")} placeholder="Distributor" />

        {errors.distributor && (
          <span className="text-red-500">{errors.distributor.message}</span>
        )}

        <Input
          type="number"
          {...register("phoneNumber", {
            valueAsNumber: true,
          })}
          placeholder="Phone Number"
        />

        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
        )}
        <AddressCollector />

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FormProvider>
    </div>
  );
}

export default FormInputForDistributor;
