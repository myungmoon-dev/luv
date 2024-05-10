import { usePostLogin } from "@/query/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginBanner from "./banner";
import { useRouter } from "next/router";

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { mutate } = usePostLogin();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    mutate(data, {
      onSuccess: () => {
        push("/");
      },
      onError: () => {
        alert("계정이 없거나 비밀번호가 틀렸습니다.");
      },
    });
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="flex w-[400px] flex-col gap-3 rounded-lg px-10 py-10 shadow-md">
          <form className="flex flex-col items-center gap-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl">로그인</h1>
            <div className="flex w-full flex-col gap-3">
              <label>
                <p>이메일</p>
                <input
                  type="email"
                  className="w-full rounded-md border px-2 py-2"
                  {...register("email", { required: true })}
                />
              </label>
              <label>
                <p>비밀번호</p>
                <input
                  type="password"
                  className="w-full rounded-md border px-2 py-2"
                  {...register("password", { required: true })}
                />
              </label>
            </div>
            <button className="w-full rounded-lg border bg-blue-500 py-2 text-white">로그인</button>
          </form>
          <div className="flex justify-end">
            <button onClick={() => push("/signup")} className="cursor-pointer text-sm text-blue-500 hover:underline">
              회원가입
            </button>
          </div>
        </div>
      </div>
      <LoginBanner />
    </div>
  );
};

export default Login;
