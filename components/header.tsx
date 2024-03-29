import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const Header: NextPage = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {openNav && (
        <div className="lg:hidden md:hidden w-full h-[100vh] bg-black fixed z-[100] flex flex-col">
          <div className="mx-auto w-full h-[65px] bg-[#f3f3f4] flex items-center justify-between px-10 fixed border border-b-1">
            <span
              className="font-semibold text-[24px] cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              Kortoba
            </span>

            <span
              className="flex lg:hidden md:hidden"
              onClick={() => setOpenNav(false)}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9.33331H28"
                  stroke="#15141F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4 16H28"
                  stroke="#15141F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4 22.6667H28"
                  stroke="#15141F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>

          <span
            className="text-[20px] cursor-pointer mt-24 px-10 underline text-white"
            onClick={() => {
              router.push("/");
              setOpenNav(false);
            }}
          >
            Home
          </span>
          <span
            className="text-[20px] cursor-pointer mt-10 px-10 underline text-white"
            onClick={() => {
              router.push("/profile");
              setOpenNav(false);
            }}
          >
            Profile
          </span>
          <span
            className="text-[20px] cursor-pointer mt-10 px-10 underline text-white"
            onClick={() => {
              router.push("/addcourse");
              setOpenNav(false);
            }}
          >
            Add Course
          </span>
        </div>
      )}

      <div className="mx-auto w-full h-[65px] bg-[#f3f3f4] flex items-center justify-between px-10 fixed border border-b-1">
        <span
          className="font-semibold text-[24px] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Kortoba
        </span>

        <span
          className="flex lg:hidden md:hidden"
          onClick={() => setOpenNav(true)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9.33331H28"
              stroke="#15141F"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4 16H28"
              stroke="#15141F"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4 22.6667H28"
              stroke="#15141F"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>

        <div className="text-[16px] text-[#333] xs:hidden sm:hidden">
          <span className="mx-5 cursor-pointer">Math</span>
          <span className="mx-5 cursor-pointer">Computer</span>
          <span className="mx-5 cursor-pointer">Chemistry</span>
          <span className="mx-5 cursor-pointer">Our Club</span>
        </div>

        <div className="flex xs:hidden sm:hidden items-center">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="border border-spacing-1 border-gray-400 rounded-lg bg-white w-[250px] h-[35px] mr-10"
          />

          <span
            className="mx-5 cursor-pointer"
            onClick={() => {
              router.push("/favorite");
            }}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7508 23.4902L2.72543 12.7852C0.818528 10.7272 -0.0877217 8.65039 0.00667932 6.55469C0.0633199 5.42188 0.412604 4.35514 1.05453 3.35449C1.37549 2.82585 1.7059 2.41048 2.04574 2.1084C3.49952 0.881185 5.03826 0.267578 6.66195 0.267578C7.88917 0.267578 9.11638 0.616862 10.3436 1.31543C11.1932 1.80632 11.9956 2.42936 12.7508 3.18457C13.506 2.42936 14.3084 1.80632 15.158 1.31543C16.3853 0.616862 17.6125 0.267578 18.8397 0.267578C20.4634 0.267578 21.9927 0.881185 23.4276 2.1084C23.7863 2.41048 24.1261 2.82585 24.4471 3.35449C25.089 4.35514 25.4383 5.42188 25.495 6.55469C25.5894 8.65039 24.6831 10.7272 22.7762 12.7852L12.7508 23.4902ZM3.20687 3.46777C2.96143 3.69434 2.72543 3.98698 2.49887 4.3457C2.04574 5.08203 1.8003 5.85612 1.76254 6.66797C1.7059 8.25391 2.46111 9.89648 4.02816 11.5957L12.7508 20.9131L21.4735 11.5957C23.0405 9.89648 23.7957 8.25391 23.7391 6.66797C23.7013 5.83724 23.4465 5.05371 22.9745 4.31738C22.7479 3.93978 22.5119 3.64714 22.2664 3.43945C21.1714 2.49544 20.0291 2.02344 18.8397 2.02344C17.6125 2.02344 16.3475 2.52376 15.0448 3.52441C14.4028 4.03418 13.8742 4.54395 13.4588 5.05371L12.7225 5.98828L12.0428 5.05371C11.8729 4.82715 11.6274 4.56283 11.3065 4.26074C10.6834 3.67546 10.0415 3.19401 9.3807 2.81641C8.45557 2.28776 7.54932 2.02344 6.66195 2.02344C5.4725 2.02344 4.32081 2.50488 3.20687 3.46777Z"
                fill="#666666"
              />
            </svg>
          </span>
          <span
            className="mx-5 cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1504 12.1289C15.1087 11.5299 15.8574 10.7513 16.3965 9.79297C16.9655 8.80469 17.25 7.73405 17.25 6.58105C17.25 5.38314 16.9505 4.27506 16.3516 3.25684C15.7826 2.26855 14.9964 1.48242 13.9932 0.898438C12.9749 0.299479 11.8706 0 10.6802 0C9.48975 0 8.38542 0.299479 7.36719 0.898438C6.37891 1.48242 5.59277 2.26855 5.00879 3.25684C4.40983 4.27506 4.11035 5.38314 4.11035 6.58105C4.11035 7.73405 4.39486 8.80469 4.96387 9.79297C5.5179 10.7513 6.2666 11.5299 7.20996 12.1289C5.81738 12.6081 4.57454 13.3455 3.48145 14.3413C2.38835 15.3371 1.54232 16.4938 0.943359 17.8115C0.314453 19.1891 0 20.6416 0 22.1689C0 22.4085 0.0823568 22.6069 0.24707 22.7642C0.411784 22.9214 0.606445 23 0.831055 23H20.5518C20.7764 23 20.9673 22.9214 21.1245 22.7642C21.2817 22.6069 21.3604 22.4085 21.3604 22.1689C21.3604 20.6416 21.0459 19.1891 20.417 17.8115C19.818 16.4938 18.972 15.3371 17.8789 14.3413C16.7858 13.3455 15.543 12.6081 14.1504 12.1289ZM5.75 6.58105C5.75 5.68262 5.97087 4.85531 6.4126 4.09912C6.85433 3.34294 7.45329 2.74398 8.20947 2.30225C8.96566 1.86051 9.78923 1.63965 10.6802 1.63965C11.5711 1.63965 12.3947 1.86051 13.1509 2.30225C13.9071 2.74398 14.506 3.34294 14.9478 4.09912C15.3895 4.85531 15.6104 5.67887 15.6104 6.56982C15.6104 7.46077 15.3895 8.28434 14.9478 9.04053C14.506 9.79671 13.9071 10.3957 13.1509 10.8374C12.3947 11.2791 11.5711 11.5 10.6802 11.5C9.78923 11.5 8.96566 11.2791 8.20947 10.8374C7.45329 10.3957 6.85433 9.79671 6.4126 9.04053C5.97087 8.28434 5.75 7.46452 5.75 6.58105ZM10.6914 13.1396C12.2337 13.1396 13.6712 13.5065 15.0039 14.2402C16.2917 14.959 17.3511 15.9473 18.1821 17.2051C19.0132 18.4629 19.4961 19.848 19.6309 21.3604H1.72949C1.86426 19.848 2.34717 18.4629 3.17822 17.2051C4.00928 15.9473 5.06869 14.959 6.35645 14.2402C7.7041 13.5065 9.14909 13.1396 10.6914 13.1396Z"
                fill="#666666"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
