import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {authenticate} from "./../../features/auth/authAPI"
import Logo from "./../../assets/logo/logo_ocarz.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const router = useRouter()

    const {
        handleSubmit,
        formState: { errors },
        register,
        
      } = useForm();
      const { mutate, isLoading } = useMutation((values) => authenticate(values), {
        onSuccess: async (data) => {
          localStorage.setItem("token", data.data.token);
          location.pathname = "/details";
          router.push('/details')

        },
        onError: async () => {
          setMessage(`IncorrectEmailOrPassword"`);
        },
      });
  return (
    <> 

    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="h-[50px] bg-yellow"></div>
   
  <div className="flex flex-col items-center  px-6 mx-auto  bg-white lg:py-0">
  {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image src={Logo} alt="advBar" width={220} height={52} />
      </a> */}
       <div className="text-center py-10 ">
    <p className="text-[20px] font-bold">Connexion / Inscription</p>
    <p>Saisissaiz votre email pour vous connectez</p>
    </div>
      <div className="w-full bg-secondary-light  shadow  md:mt-0 sm:max-w-[40rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center ">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(mutate)}>
              <div className="relative">
                  <input
                   type="email"   {...register("username")} name="username" id="username"
                    className="dark:focus:border-blue-500 bg-secondary-light focus:border-blue-600 peer block w-full border-2 border-primary  px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 bg-secondary-light peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Email
                  </label>
                </div>
                  {/* <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary">Email</label>
                      <input type="email"   {...register("username")} name="username" id="username" className="bg-gray-50 border border-primary text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div> */}
                  {/* <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary">Mot de passe</label>
                      <input type="password" {...register("password")} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-primary text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div> */}
                  <div className="relative">
                  <input
                  type="password" {...register("password")} name="password" id="password" placeholder="••••••••" 
                    className="dark:focus:border-blue-500 bg-secondary-light focus:border-blue-600 peer block w-full border-2 border-primary  px-2.5 py-2 focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 bg-secondary-light peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Mot de passe
                  </label>
                </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Mot de passe oublie ?</a>
                  </div>
                  <button type="submit" className=" text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary">Se connecter</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Vous n'avez pas un compte? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">S'inscrire</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   
        

    </>
   
  );
};
export default LoginPage;
