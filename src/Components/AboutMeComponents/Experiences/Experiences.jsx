import React from "react";
import "./experiences.scss";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="experienceContainer">
      <div className="experienceWrapper">
        <div className="contentContainer">
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/alif.jpg"
                alt=""
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">Alif kindergarten</h1>
              <p>
                From <span className="date">1996</span> to{" "}
                <span className="date">1998</span>
              </p>
              <p>
                Attending Alif KG, a religious school, has laid a solid
                foundation for me, emphasizing not only academic knowledge but
                also moral values.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/wisdom.png"
                alt=""
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">Wisdom Elementary School</h1>
              <p>
                From <span className="date">1999</span> to{" "}
                <span className="date">2007</span>
              </p>
              <p>
                Attending Wisdom Elementary School has equipped me with a robust
                foundation in education, laying the groundwork for fundamental
                knowledge and academic skills. The school's focus on imparting
                essential educational concepts has been instrumental in shaping
                my understanding during my elementary years.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/kidame.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">
                Kidame Gebeya Secondary School
              </h1>
              <p>
                From <span className="date">2008</span> to{" "}
                <span className="date">2009</span>
              </p>
              <p>
                Attending Kidame Gebeya High School has been instrumental in
                providing me with a well-rounded education, including essential
                knowledge in various academic subjects. I gained foundational
                science knowledge during my time there, contributing to my
                overall academic growth.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/memhir.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">
                Memhir Akalewold Preparatory School
              </h1>
              <p>
                From <span className="date">2010</span> to{" "}
                <span className="date">2011</span>
              </p>
              <p>
                Attending Memihr Akalewold Preparatory School has been pivotal
                in offering me a comprehensive education, covering a diverse
                range of academic subjects. During my time there, I expanded my
                science knowledge, further enhancing my academic foundation and
                overall growth.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/wollo.png"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">
                Wollo University summer STEM program
              </h1>
              <p>
                From <span className="date">2009</span> to{" "}
                <span className="date">2011</span>
              </p>
              <p>
                Studying at Wollo University for a four-year STEM program was
                transformative, providing me with advanced knowledge in Science,
                Technology, English, and Mathematics. During my time there, I
                actively engaged in experiments, contributing to a hands-on
                learning experience and furthering my understanding of these
                crucial subjects.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/addis.jpg"
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">Addis Ababa University</h1>
              <p>
                From <span className="date">2012</span> to{" "}
                <span className="date">2017</span>
              </p>
              <p>
                My experience at Addis Ababa University, where I pursued
                Electrical and Computer Engineering with a specialization in
                Computer Science, was immensely enriching. The university
                provided a platform for in-depth exploration of these fields,
                offering advanced coursework and practical applications.
                Engaging in specialized studies allowed me to deepen my
                understanding and gain expertise in the intersection of
                electrical engineering and computer science
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/mint.png"
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">
                Ethiopian Innovation and Technology Ministry
              </h1>
              <p>
                From <span className="date">October 2016</span> to{" "}
                <span className="date">Feburary 2016</span>
              </p>
              <p>
                My experience at the Ethiopian Ministry of Innovation and
                Technology was marked by significant contributions, particularly
                in the development of a fully functional inventory system. The
                system, which I built, is currently in active use. This hands-on
                project not only showcased my technical skills but also allowed
                me to make a tangible impact within the ministry.
              </p>
            </div>
          </div>
          <div className="eachContent">
            <div className="imageContainer">
              <img
                src="/images/federal.jpg"
                alt=""
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="contentContainer">
              <h1 className="experienceTitle">Ethiopian Federal Police</h1>
              <p>
                From <span className="date">October 2016</span> to{" "}
                <span className="date">current</span>
              </p>
              <p>
                My current role at the Ethiopian Federal Police has been
                particularly impactful as I contribute to the development and
                implementation of a Private Security Agent Management System.
                This project involves creating a comprehensive and efficient
                system to manage private security personnel. Working with the
                Ethiopian Federal Police allows me to leverage my skills in
                technology to enhance security operations and streamline
                management processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
