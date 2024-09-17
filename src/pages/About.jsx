import React from "react";
import Titles from "../components/Titles";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Titles text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-centergap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            velit dolores, distinctio adipisci officia, maiores laboriosam nisi
            quos natus asperiores voluptates magnam dolorem aliquid. Maiores
            fugiat ut hic dolor optio.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sunt
            reiciendis culpa nam doloribus architecto deleniti obcaecati a,
            dolor, provident quisquam est at optio dolorum quam temporibus
            accusantium quae nesciunt?
          </p>
          <br />
          <b className="text-gray-800">Our Mission</b>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum
            vitae perferendis maxime, inventore delectus consectetur iusto
            exercitationem illum neque totam facere veniam assumenda porro
            recusandae corrupti fugiat architecto facilis.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Titles text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            voluptatum! Vero, ea corrupti. Autem illum soluta quibusdam odio id,
            animi minus delectus sit corporis vel cupiditate excepturi quidem
            quisquam harum.
          </p>
        </div>
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            voluptatum! Vero, ea corrupti. Autem illum soluta quibusdam odio id,
            animi minus delectus sit corporis vel cupiditate excepturi quidem
            quisquam harum.
          </p>
        </div>
        <div className="border px-10 md:px16 py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            voluptatum! Vero, ea corrupti. Autem illum soluta quibusdam odio id,
            animi minus delectus sit corporis vel cupiditate excepturi quidem
            quisquam harum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
