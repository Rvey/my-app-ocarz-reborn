import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import CustomDropDown from "../inputs/customDropDown";
import Breadcrumbs from "../main/announceSection/card/Breadcrumbs";

const NewAnnounce = () => {
  return (
    <>
      <div className="bg-white">
        <div className="h-[50px] bg-yellow"></div>
        <div className="px-[50px] py-5">
          <div className="p-5">
            <p>
              Votre voiture
              <span className="text-[20px] text-primary"> Peugout , 208 </span>
            </p>
            <hr className="text-secondary" />
          </div>
          <div className="p-5">
            <p>Fiche technique du vehicule</p>
          </div>
          <div className="px-10 py-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Marque
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Modele
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Carburant
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Categorie
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Boite de vitesse
                  </label>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="relative">
                  <select
                    id="countries"
                    className="focus:ring-blue-500 focus:border-blue-500 block block w-full border-2 border-primary p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Motorisation
                  </label>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="text-gray-500 dark:text-gray-400   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Kilometrage
                    </label>
                  </div>

                  <span className=" text-gray-900  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    KM
                  </span>
                </div>
              </div>

              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="text-gray-500 dark:text-gray-400   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Mise en circulation
                    </label>
                  </div>

                  <span className=" text-gray-900  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    2008
                  </span>
                </div>
              </div>
              <div className="py-5 text-center">
                <div className="flex">
                  <div className="relative basis-3/4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="dark:focus:border-blue-500  focus:border-blue-600 peer block w-full border-2  border-primary px-2.5 py-2 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="text-gray-500 dark:text-gray-400   peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                    >
                      Puissance fiscale
                    </label>
                  </div>

                  <span className=" text-gray-900  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 basis-1/4 items-center border-2 border-l-0 border-primary  px-3 py-2 text-sm">
                    C.V
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 bg-primary-light p-5">
              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Nbr de proprietaire
                  </label>
                </div>
              </div>

              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    nbr de cles
                  </label>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full border-2 border-primary  bg-primary-light px-2.5 py-2 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="text-gray-500 dark:text-gray-400 peer-focus:text-blue-600  peer-focus:dark:text-blue-500 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-primary-light  px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
                  >
                    Nbr de partieres
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <p>Equipements</p>
          </div>
          <div className="px-10 py-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary-light text-center ">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Airbags
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Detecteur de pluie
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Detecteur de pluie
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      ABS
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Commande au volant
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Commande au volant
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      ESP
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Ecran tactile
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Ecran tactile
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Aide au freinage d urgence
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      banquette arriere rabattable 1/3-2/3
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      banquette arriere rabattable 1/3-2/3
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                     Systeme audio
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Climatisation
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary-light  text-center">
                <div className="flex flex-row">
                  <div className="basis-2/12 py-[0.5rem]">
                    <input
                      
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2"
                    />
                  </div>
                  <div className="basis-8/12 py-[0.5rem] text-start">
                    <label className="text-gray-900 dark:text-gray-300 ml-2 text-[12px] ">
                      Climatisation
                    </label>
                  </div>
                  <div className="basis-2/12">
                    {" "}
                    {/* @ts-ignore */}
                    <Image
                      src="/img1.webp"
                      width="50"
                      height="50"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
        

         
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewAnnounce;
