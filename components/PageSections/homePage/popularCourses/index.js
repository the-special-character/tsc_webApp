import Card from "@components/card";
import React from "react";
import Link from "next/link";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";

const PopularCourses = ({ data }) => {
  console.log("popular Courses Data:", data);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <section className="py-20 ">
        <h2 className="text-center mb-10">Browse our popular courses</h2>
        <div className="card-container relative container ml-auto max-w-7xl px-6">
          <div className="navigation flex flex-row justify-between w-[85%] overflow-hidden  absolute z-10  top-40 px-10">
            <div
              onClick={slideLeft}
              className="avatar placeholder bg-neutral-100 hover:bg-primary hover:fill-neutral-100 rounded-full"
            >
              <div className="w-16 md:w-20">
                <span className=" w-4">
                  <LeftSvg />
                </span>
              </div>
            </div>
            <div
              onClick={slideRight}
              class="avatar placeholder bg-neutral-100  hover:bg-primary hover:fill-neutral-100 rounded-full"
            >
              <div class="w-16 md:w-20 ">
                <span className=" w-4">
                  <RightsSvg />
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              id="slider"
              className="no-scrollbar snap-x overflow-x-scroll overflow-clip flex scroll whitespace-nowrap scroll-smooth w-[100vw]  md:flex-row md:inline-flex gap-4 justify-center md:text-left pr-[200px] pl-[400px] md:pl-[900px] md:pr-[430px]"
            >
              {data.courses.map((obj) => {
                return (
                  <div
                    className="snap-start md:min-w-[550px] relative py-10"
                    key={obj.id}
                  >
                    <Link href={`course/${obj.id}`}>
                      <a>
                        <Card {...obj} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-10 flex items-center justify-center">
          <Link href={data.explore?.link}>
            <button className="btn btn--primary uppercase">
              {data.explore?.buttonText}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
