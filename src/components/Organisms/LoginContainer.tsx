"use client";

import { Title } from "@/components/Atoms";
import LoginForm from "@/components/Organisms/LoginForm";
import ErrorSpan from "@/components/Atoms/ErrorSpan";
import useLoginForm from "@/hooks/LoginForm";

function LoginContainer() {
  const { register, handleSubmit, errors, OnSubmit, isDisabled } =
    useLoginForm();

  return (
    <main className="bg-white rounded-md w-full max-w-[400px] px-5 py-8 m-auto">
      <Title>로그인</Title>
      <LoginForm onSubmit={handleSubmit((data) => OnSubmit(data))}>
        <LoginForm.FormInput>
          <LoginForm.FormInput.Label htmlFor={"email"}>
            이메일
          </LoginForm.FormInput.Label>
          <LoginForm.FormInput.Input
            type="text"
            {...register("email")}
            disabled={isDisabled}
          />
          {errors.email?.message && (
            <ErrorSpan>{errors.email?.message}</ErrorSpan>
          )}
        </LoginForm.FormInput>

        <LoginForm.FormInput>
          <LoginForm.FormInput.Label htmlFor={"password"}>
            비밀번호
          </LoginForm.FormInput.Label>
          <LoginForm.FormInput.Input
            type="password"
            {...register("password")}
            disabled={isDisabled}
          />
          {errors.password?.message && (
            <ErrorSpan>{errors.password?.message}</ErrorSpan>
          )}
        </LoginForm.FormInput>

        <LoginForm.SubmitButton type={"submit"} disabled={isDisabled}>
          로그인하기
        </LoginForm.SubmitButton>
      </LoginForm>
    </main>
  );
}

export default LoginContainer;
