"use client";

import { Title } from "@/components/Atoms";
import SignUpForm from "@/components/Organisms/SignUpForm";

function SignUp() {
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      <Title>회원가입</Title>

      <SignUpForm>
        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label id={"email"}>
            이메일
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input />
        </SignUpForm.FormInput>

        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label id={"email"}>
            비밀번호
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input type="password" />
        </SignUpForm.FormInput>

        <SignUpForm.FormInput>
          <SignUpForm.FormInput.Label id={"email"}>
            비밀번호 확인
          </SignUpForm.FormInput.Label>
          <SignUpForm.FormInput.Input type="password" />
        </SignUpForm.FormInput>

        <div className="mt-2"></div>
        <SignUpForm.SubmitButton>회원가입하기</SignUpForm.SubmitButton>
      </SignUpForm>
    </main>
  );
}

export default SignUp;
