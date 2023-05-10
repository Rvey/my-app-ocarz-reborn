import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "./../../assets/logo/logo_ocarz.png";
import {signup} from "./../../features/register/signupAPI"

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const router = useRouter()
      const { mutate, isLoading } = useMutation((values) => signup(values), {
        onSuccess: async () => {
          toast.success(`b1`);
          router.push('/login')
        },
        onError: async (err:any) => {
          if (
            err.response.status === 400 &&
            err.response.data["hydra:description"] === "User Already Exist"
          ) {
            toast.warning("emailAlreadyExists");
          } else {
            toast.error(`anErrorHasOccurred`);
          }
        },
      })
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
                   type="email" {...register('email')} name="email" id="email"
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

                <div className="relative">
                  <input
                  type="password" {...register('rePassword')} name="rePassword" id="rePassword" 
                  placeholder="••••••••" 
                    className="dark:focus:border-blue-500 bg-secondary-light focus:border-blue-600 peer block w-full border-2 border-primary  px-2.5 py-2 focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 bg-secondary-light peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                   Confirmer le mot de passe
                  </label>
                </div>
                
                  <button type="submit" className=" text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary">S'inscrire</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      J ai deja un compte? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Se connecter</a>
                  </p>
                  
              </form>
          </div>
      </div>
  </div>
</section>

    </>
   
  );
};
export default RegisterPage;
