import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다."),
    passwordConfirm: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다."),
  })
  .superRefine(({ password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      return { passwordConfirm: "비밀번호가 일치하지 않습니다." };
    }
  });
