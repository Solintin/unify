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
                  Eliminate mismanagement and manipulation of your school data
                  by keeping records of staff and students, eliminating manual
                  data entry which is tedious, and time-consuming. A school’s
                  major source of income is fees. Unify also offers a solution
                  to manage dynamic number of fee categories in a convenient
                  manner.
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
                  Lecturers on Unify can have full control of several processes
                  in their classroom; from scheduling and conducting online live
                  classes, sharing learning content, managing results
                  seamlessly, marking attendance, communicating with students
                  and parents, and lots more.
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
                  Unify offers interesting & interactive e-learning automated
                  features that connect the students with teachers beyond the
                  walls of the classroom. Once the exam result has been
                  published by the school, students can access it anywhere, any
                  time.
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
                  Parents can log in with their user id to keep track of their
                  ward’s academic performance, view the academic calendar and
                  send/recieve messages to/from lecturer and the school anytime
                  regarding any concerns.
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
