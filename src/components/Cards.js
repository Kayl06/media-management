import Button from "./Button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

function Cards() {
  return (
    <>
      <div className="flex justify-between flex-col m-3 mt-10 __cards">
        <h1 className="m-2 text-md font-bold uppercase tracking-wider">
          Type of Cards
        </h1>

        <div className="__cards_list flex flex-col mt-5 gap-20">
          <div className="__blog_cards flex flex-col lg:flex-row gap-5">
            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-col gap-5">
              <div className="__blog_card_1 flex flex-col shadow-lg rounded-[20px] w-[500px]">
                <div className="__header">
                  <img
                    src="https://figma-to-react-murex.vercel.app/static/media/brooke-cagle-g1Kr4Ozfoac-unsplash%201.cbb8e06ffcd273c3732b.png"
                    alt="test"
                    className=" rounded-t-xl "
                  />
                </div>

                <div className="__body p-5 flex flex-col justify-between">
                  <div>
                    <div className="__title mb-5 uppercase ">
                      <h1 className="font-bold">Work Life Balance 2023</h1>
                    </div>

                    <div className="__description">
                      <p className="text-gray-400 text-sm font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-5">
                    <Button className="border-0 text-[14px] text-gray-700 hover:text-blue-500 font-medium flex items-center px-0">
                      <span>Read more</span>{" "}
                      <HiArrowNarrowRight className="ml-2 text-xl" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="__blog_card_2 flex flex-col shadow-lg rounded-[20px] w-[500px]">
                <div className="__header">
                  <img
                    src="https://figma-to-react-murex.vercel.app/static/media/brooke-cagle-g1Kr4Ozfoac-unsplash%201.cbb8e06ffcd273c3732b.png"
                    alt="test"
                    className=" rounded-t-xl "
                  />
                </div>

                <div className="__body p-5 flex flex-col justify-between">
                  <div className="__title uppercase">
                    <h1 className="font-bold">Work Life Balance 2023</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-col gap-5">
              <div className="__blog_card_3 flex flex-row shadow-lg rounded-[20px] w-[500px]">
                <div className="__left relative rounded-l-xl w-full bg-[url('https://figma-to-react-murex.vercel.app/static/media/brooke-cagle-g1Kr4Ozfoac-unsplash%201.cbb8e06ffcd273c3732b.png')] bg-cover bg-center"></div>

                <div className="__body p-5 flex flex-col justify-between">
                  <div className="__title uppercase mb-5">
                    <h1 className="font-bold">Work Life Balance 2023</h1>
                  </div>

                  <div className="__description">
                    <p className="text-gray-400 text-sm font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. a. Ut enim ad minim veniam, quis nostru.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="__blog_card_3 flex flex-col shadow-lg rounded-[20px] w-[500px] h-[450px] relative
                bg-[url('https://figma-to-react-murex.vercel.app/static/media/brooke-cagle-g1Kr4Ozfoac-unsplash%201.cbb8e06ffcd273c3732b.png')] bg-cover bg-center"
              >
                <div className="__body w-full h-full backdrop-brightness-[.7] flex items-end rounded-[20px] p-5 text-white">
                  <div>
                    <div className="__title uppercase mb-3">
                      <h1 className="font-bold">Work Life Balance 2023</h1>
                    </div>

                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. a. Ut enim ad minim veniam, quis nostru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="__project_cards mb-20">
            <div className="__project_card_1 grid grid-cols-12 gap-[10px] items-center">
              <div
                className="__project_content text-end relative"
                style={{ gridArea: "1 / 1 / -1 / 7", gridColumn: "7/-1" }}
              >
                <div>
                  <div className="leading-5 mb-[2em]">
                    <p className="__project_overline text-[.8em] text-slate-600">
                      Featured Project
                    </p>
                    <h1 className="font-bold text-[1.4em]">
                      Example Project
                    </h1>
                  </div>
                  <div className="__project_description bg-slate-800 p-5 rounded z-[2] relative shadow-lg">
                    <p className="text-gray-300 text-sm font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="__project_image z-[1] bg-slate-400 rounded-[20px] "
                style={{ gridArea: "1 / 6 / -1 / -1", gridColumn: "1/8" }}
              >
                <div
                  className="__image_wrapper rounded-[20px] cursor-pointer w-full max-w-full relative overflow-hidden before:w-full before:h-full before:mix-blend-screen before:bg-slate-900 before:absolute before:inset-0 before:z-[3]"
                >
                  <div className="h-[300px] max-w-[700px] block">
                    <img
                      src="https://figma-to-react-murex.vercel.app/static/media/brooke-cagle-g1Kr4Ozfoac-unsplash%201.cbb8e06ffcd273c3732b.png"
                      className="h-full max-w-full static object-cover"
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
}

export default Cards;
