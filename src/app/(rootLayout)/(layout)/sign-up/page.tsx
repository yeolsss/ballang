"use client";

import { Title } from "@/components/Atoms";
import SignUpForm from "@/components/Organisms/SignUpForm";
import ErrorSpan from "@/components/Atoms/ErrorSpan";
import useSignUpForm from "@/hooks/SignUpForm";

function SignUp() {
  const { register, handleSubmit, errors, isDisabled, OnSubmit } =
    useSignUpForm();

  return (
    <>
      <Title>회원가입</Title>

      <SignUpForm onSubmit={handleSubmit((data) => OnSubmit(data))}>
        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label htmlFor={"email"}>
            이메일
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input
            type="text"
            {...register("email")}
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
          />
          {errors.passwordConfirm?.message && (
            <ErrorSpan>{errors.passwordConfirm?.message}</ErrorSpan>
          )}
        </SignUpForm.FormInput>

        <div className="mt-2"></div>
        <SignUpForm.SubmitButton type={"submit"} disabled={isDisabled}>
          회원가입하기
        </SignUpForm.SubmitButton>
      </SignUpForm>
    </>
  );
}

export default SignUp;
