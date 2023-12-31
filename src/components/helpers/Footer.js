import React from 'react';
import { Link } from 'react-router-dom';
import { FaS, FaXTwitter} from 'react-icons/fa6';
import { FaFacebookF, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="bg-[#F5F5F3]  w-full ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-6">
              <div className="md:flex md:justify-between">
                <div className="mb-6 mx-auto md:mb-0">
                    <Link to="/" class="flex items-center">
                      <span className="font-bold flex items-center relative">
                        <span className="text-[25px]">
                          <FaS/>
                        </span>
                        <span className=" text-xl absolute left-[22px]">hoppika</span>
                      </span>
                    </Link>
                    <p className="text-lg lg:inline-block sm:hidden w-full mt-4">
                      Shoppika emerges as a premier global e-commerce brand, acclaimed for its commitment to <br /> capturing the quintessence of timeless and universally chic styles.
                    </p>
                </div>
                <div className="grid grid-cols-2  gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Technology</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="https://react.dev/" class="hover:underline">React</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="https://github.com/saurabhm02/Shoppika" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/" class="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                        <ul class="text-gray-500  font-medium">
                            <li class="mb-4">
                                <a  class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">© 2023 <Link to="/" class="hover:underline">Shoppika™</Link>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/" class="text-gray-500 hover:text-gray-900">
                        <FaFacebookF/>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="https://discord.com/" class="text-gray-500 hover:text-gray-900 ms-5">
                        <FaDiscord/>
                        <span class="sr-only">Discord community</span>
                    </a>
                    <a href="https://twitter.com/" class="text-gray-500 hover:text-gray-900 ms-5">
                        <FaXTwitter/>
                        <span class="sr-only">Twitter page</span>
                    </a>
                    <a href="https://github.com/saurabhm02/Shoppika" class="text-gray-500 hover:text-gray-900  ms-5">
                        <FaGithub/>
                        <span class="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
          </div>
      </div>

  );
};

export default Footer;



