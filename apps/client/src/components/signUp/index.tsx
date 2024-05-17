import { usePostSignUp } from "@/query/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginBanner from "../login/banner";

export interface ISignUpForm {
  email: string;
  password: string;
  confirmationPassword: string;
  name: string;
  phone: string;
}

const inputs: { title: string; type?: "text" | "password" | "email"; name: keyof ISignUpForm }[] = [
  { title: "이메일", type: "email", name: "email" },
  { title: "비밀번호", type: "password", name: "password" },
  { title: "비밀번호 확인", type: "password", name: "confirmationPassword" },
  { title: "이름", name: "name" },
  { title: "휴대폰 번호", name: "phone" },
];

const SignUp = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<ISignUpForm>();
  const { mutate } = usePostSignUp();

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    mutate(data, {
      onSuccess: () => {
        push("/");
      },
      onError: (res) => {
        alert((res as AxiosError<any>).response?.data.error || "에러가 발생했습니다.");
      },
    });
  };

  return (
    <div className="relative grid sm:static sm:grid-cols-2">
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:static sm:translate-x-0 sm:translate-y-0">
        <form
          className="flex min-w-[330px] flex-col items-center gap-8 rounded-lg bg-white/90 px-10 py-10 shadow-md sm:w-[400px] sm:bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl">회원가입</h1>
          <div className="flex w-full flex-col gap-3">
            {inputs.map((input) => (
              <label key={input.name}>
                <p>{input.title}</p>
                <input
                  type={input.type}
                  className="w-full rounded-md border px-2 py-2"
                  {...register(input.name, { required: true })}
                />
              </label>
            ))}
          </div>
          <button className="w-full rounded-lg border bg-blue-500 py-2 text-white">가입</button>
        </form>
      </div>
      <LoginBanner />
    </div>
  );
};

export default SignUp;
