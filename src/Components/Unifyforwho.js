import React from "react";
import u_admin from "../Assets/Img/u_admin.png";
import u_lecturer from "../Assets/Img/u_lecturer.png";
import u_parent from "../Assets/Img/u_parent.png";
import u_student from "../Assets/Img/u_student.png";
import "./Component-styles.css";

const Unifyforwho = () => {
  return (
    <div className="">
      <div className="relative ">
        <div className="title"></div>
      </div>
      <p className="mb-14 pt-5 fomt-medium text-3xl text-center">
      Unify is for Everyone
    </p>
      <div className="">
      
        <div className="container w-11/12 mx-auto pb-16">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="u-card flex flex-col">
              <div className="u-card-title-1 mb-2 ">Unify for Admin</div>
              <div className="grid md:grid-cols-12 gap-7 items-center">
                <div className="md:col-span-7 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae, semper eget tincidunt porta. Cras et eget odio ornare
                  nulla nisl. Morbi leo neque porta sollicitudin nulla auctor
                  semper pellentesque tincidunt. Cursus tellus neque, pretium
                  augue. In nibh aliquam.
                </div>
                <div className="md:col-span-5">
                  <img
                    src={u_admin}
                    className="rounded h-[100%] w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="u-card flex flex-col">
              <div className="u-card-title-2 mb-2 ">Unify for Lecturers</div>
              <div className="grid md:grid-cols-12 gap-7 items-center">
                <div className="md:col-span-7 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae, semper eget tincidunt porta. Cras et eget odio ornare
                  nulla nisl. Morbi leo neque porta sollicitudin nulla auctor
                  semper pellentesque tincidunt. Cursus tellus neque, pretium
                  augue. In nibh aliquam.
                </div>
                <div className="md:col-span-5">
                  <img
                    src={u_lecturer}
                    className="rounded h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="u-card flex flex-col">
              <div className="u-card-title-3 mb-2 ">Unify for Students</div>
              <div className="grid md:grid-cols-12 gap-7 items-center">
                <div className="md:col-span-7 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae, semper eget tincidunt porta. Cras et eget odio ornare
                  nulla nisl. Morbi leo neque porta sollicitudin nulla auctor
                  semper pellentesque tincidunt. Cursus tellus neque, pretium
                  augue. In nibh aliquam.
                </div>
                <div className="md:col-span-5">
                  <img
                    src={u_student}
                    className="rounded h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="u-card flex flex-col">
              <div className="u-card-title-4 mb-2 ">Unify for Parents</div>
              <div className="grid md:grid-cols-12 gap-7 items-center">
                <div className="md:col-span-7 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae, semper eget tincidunt porta. Cras et eget odio ornare
                  nulla nisl. Morbi leo neque porta sollicitudin nulla auctor
                  semper pellentesque tincidunt. Cursus tellus neque, pretium
                  augue. In nibh aliquam.
                </div>
                <div className="md:col-span-5">
                  <img
                    src={u_parent}
                    className="rounded h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unifyforwho;
