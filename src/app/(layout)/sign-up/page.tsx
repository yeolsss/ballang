"use client";

import { Title } from "@/components/Atoms";
import SignUpForm from "@/components/Organisms/SignUpForm";
import ErrorSpan from "@/components/Atoms/ErrorSpan";
import useSignUpForm from "@/hooks/SignUpForm";

function SignUp() {
  const { register, handleSubmit, errors, isPending, OnSubmit } =
    useSignUpForm();

  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      <Title>회원가입</Title>

      <SignUpForm onSubmit={handleSubmit((data) => OnSubmit(data))}>
        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label htmlFor={"email"}>
            이메일
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input
            type="text"
            {...register("email")}
            disabled={isPending}
          />
          {errors.email?.message && (
            <ErrorSpan>{errors.email?.message}</ErrorSpan>
          )}
        </SignUpForm.FormInput>

        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label htmlFor={"password"}>
            비밀번호
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input
            type="password"
            {...register("password")}
            disabled={isPending}
          />
          {errors.password?.message && (
            <ErrorSpan>{errors.password?.message}</ErrorSpan>
          )}
        </SignUpForm.FormInput>

        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label htmlFor={"passwordConfirm"}>
            비밀번호 확인
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input
            type="password"
            {...register("passwordConfirm")}
            disabled={isPending}
          />
          {errors.passwordConfirm?.message && (
            <ErrorSpan>{errors.passwordConfirm?.message}</ErrorSpan>
          )}
        </SignUpForm.FormInput>

        <div className="mt-2"></div>
        <SignUpForm.SubmitButton disabled={isPending}>
          회원가입하기
        </SignUpForm.SubmitButton>
      </SignUpForm>
    </main>
  );
}

export default SignUp;
