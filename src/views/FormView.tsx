import React from "react";
import { styled } from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpSchemaType } from "../../schemas/signUpSchema";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 500px;
  input {
    margin: 10px 0 0 0;
  }
`;

export default function FormView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpSchemaType> = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <label htmlFor="email">Email</label>
      {errors.email && <p>{errors.email?.message}</p>}
      <input type="text" {...register("firstName")} />
      <label htmlFor="firstName">First Name</label>
      {errors.firstName && <p>{errors.firstName?.message}</p>}
      <input type="text" {...register("lastName")} />
      <label htmlFor="lastName">Last Name</label>
      {errors.lastName && <p>{errors.lastName?.message}</p>}
      <input type="password" {...register("password")} />
      <label htmlFor="password">Password</label>
      {errors.password && <p>{errors.password?.message}</p>}
      <input type="password" {...register("confirmPassword")} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
      <div>
        <input
          type="checkbox"
          {...register("terms")}
          style={{ margin: "0 10px 0 0" }}
        />
        {errors.terms && <p>{errors.terms?.message}</p>}
        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </div>
    </StyledForm>
  );
}
