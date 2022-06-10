import { Result } from "postcss";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import get from "./../http/get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel, Dropdown } from "react-bootstrap";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

import SwiperCore, { EffectFlip } from "swiper";

import post from "../http/post";

const Home = () => {
  const [global, setglobal] = useState({});
  const [menu, setmenu] = useState([]);
  const [slider, setslider] = useState([]);
  const [services, setservices] = useState([]);
  const [jobc, setjobc] = useState([]);
  const [jobo, setjobo] = useState([]);
  const [team, setteam] = useState([]);
  const [clients, setclient] = useState([]);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "clients" }));
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setclient(result.result);
    });
  }, []);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "ourteam" }));
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setteam(result.result);
    });
  }, []);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append(
      "data",
      JSON.stringify({ key: "type", value: "jobs_available" })
    );
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setjobo(result.result);
    });
  }, []);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "services" }));
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setservices(result.result);
    });
  }, []);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append(
      "data",
      JSON.stringify({ key: "type", value: "job_categories" })
    );
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setjobc(result.result);
    });
  }, []);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "slider" }));
    post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
      setslider(result.result);
    });
  }, []);
  useEffect(() => {
    get("http://localhost:9000/api/getglobal").then((result) => {
      // alert((result.result[0].text1))
      setglobal({
        ...JSON.parse(result.result[0].text1),
        logo: result.result[0].entry1,
      });
    });
  }, []);

  useEffect(() => {
    get("http://localhost:9000/api/getmenu").then((result) => {
      //  alert((result.result[0].text1))
      setmenu([...JSON.parse(result.result[0].text1)]);
    });
  }, []);

  return (
    <div>
      <Banner global={global} />
      <MenuBar global={global} menu={menu} />
      <Slider slider={slider} />
      <Service service={services} />
      <JobC jobc={jobc} />
      <JobsOpen jobo={jobo} />
      <Teams team={team} global={global} />
      <Clients clients={clients} />
    </div>
  );
};

export default Home;

function Banner(props) {
  return (
    <div className=" h-25 text-white text-xs  py-1 banner">
      <div>
        Lic: {props.global.LIC} <br></br> Registration:{" "}
        {props.global.Registration}
      </div>
      <div>
        {" "}
        {props.global.phone}
        <br /> {props.global.Email}{" "}
      </div>
    </div>
  );
}

function MenuBar(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.menu);
  }, [props.menu]);
  return (
    <div>
      <div className="home_logo_container">
        <img
          src={`http://localhost:9000/${props.global.logo}`}
          className="homepage_logo"
          alt=""
        />
      </div>

      <div className="menubox">
        <button className="menuitem hover:bg-blue-400 hover:text-white">
          Home
        </button>

        {data.map((value, index) => {
          if (true) {
            return (
              <button className="menuitem hover:bg-blue-400 hover:text-white">
                {value.name}
              </button>
            );
          }
          return (
            <Dropdown>
              <Dropdown.Toggle className=" menudrop">
                {value.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {value.items.map((item, index) => {
                  return (
                    <Dropdown.Item href="#/action-2">{item.name}</Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          );
        })}
      </div>
    </div>
  );
}

function Slider(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.slider);
  }, [props.slider]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      spaceBetween={70}
      slidesPerView={1}
      speed={500}
      loop={true}
      touchRatio={1.5}
      navigation={true}
      effect={"flip"}
      pagination={{ clickable: true }}
      className="mySwiper jobs-open"
    >
      {data.map((value, index) => (
        <SwiperSlide>
          <Card>
            <Card.Img
              className="slider-image"
              variant="top"
              src={"http://localhost:9000/" + value.entry1}
            />
            <Card.Body>
              {/* <Card.Text>
              <div>{value.entry2}</div>
              <div>{value.entry3}</div>
              <div>{value.entry4}</div>
            </Card.Text>
            <Button color="white">View More</Button> */}
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Service(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.service);
  }, [props.service]);

  return (
    <div className="services">
      <div className="service-heading">Services</div>
      <div className="service-body">
        {data.map((value, index) => (
          <div className="service-item">
            <img
              src={"http://localhost:9000/" + value.entry1}
              className="service-image"
            />
            <label className="service-label"> {value.entry2}</label>
          </div>
        ))}
      </div>
      <div className="service-button">
        <button className="px-2 py-2 mb-10 bg-blue-500 hover:bg-blue-700 rounded text-white">
          View All
        </button>
      </div>
    </div>
  );
}

function JobC(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.jobc);
  }, [props.jobc]);

  return (
    <div className="jobc">
      <div className="jobc-heading">Job Category</div>
      <div className="jobc-body">
        {data.map((value, index) => (
          <div className="jobc-item">
            <img
              src={"http://localhost:9000/" + value.entry1}
              className="jobc-image"
            />
            <label className="jobc-label"> {value.entry2}</label>
          </div>
        ))}
      </div>
      <div className="jobc-button">
        <button className="px-2 py-2 bg-blue-500 hover:bg-blue700 rounded text-white">
          View All
        </button>
      </div>
    </div>
  );
}

function JobsOpen(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(props.jobo);
  }, [props.jobo]);

  return (
    <div className="job-available">
      <div className="jobs-available-heading"> Vacency Open</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        spaceBetween={70}
        slidesPerView={4}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        effect={"flip"}
        pagination={{ clickable: true }}
        className="mySwiper jobs-open"
      >
        {data.map((value, index) => (
          <SwiperSlide>
            <Card>
              <Card.Img
                className="jobs-available-image"
                variant="top"
                src={"http://localhost:9000/" + value.entry1}
              />
              <Card.Body>
                <Card.Text>
                  <div>{value.entry2}</div>
                  <div>{value.entry3}</div>
                  <div>{value.entry4}</div>
                </Card.Text>
                <Button color="white">View More</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Teams(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(props.team);
  }, [props.team]);

  return (
    <div className="team-class">
      <div className="teamcontiner">
        <div className="team-heading">
          <div className="team-heading-color">Team </div> Of Experts
        </div>
        <div class="team-morale">
          Ethics and integrity are the bases on which our professionals build
          their careers. They are fundamentals that become daily attitudes.
        </div>
        <div className="team-container">
          {data.map((value, index) => {
            return (
              <div className="team">
                <div className="">
                  <img
                    src={"http://localhost:9000/" + value.entry1}
                    className="team-image"
                  />
                </div>
                <div className="team-desc">
                  <div className="team-name">{value.entry2}</div>
                  <div className="team-info">
                    {value.entry3}
                    <br /> {value.entry4} <br /> {value.entry5}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="message_from-chairman">
        {data.map((value, index) => {
          if (value.entry3 == "Chairman") {
            return (
              <img
                src={"http://localhost:9000/" + value.entry1}
                className="team-image"
              />
            );
          } else {
            return <></>;
          }
        })}{" "}
        Message From Chairman
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ut lacinia diam. Vivamus efficitur et est quis posuere. Nulla
        sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet
        justo eu quam volutpat ullamcorper. Duis ut hendrerit mauris. Phasellus
        faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.
      </div>
    </div>
  );
}

function Clients(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(props.clients);
  }, [props.clients]);

  return (
    <div className="client-container">
      <div className="client-heading"> Clients</div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        spaceBetween={70}
        slidesPerView={7}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        effect={"flip"}
        pagination={{ clickable: true }}
        className="mySwiper client-swiper"
      >
        {data.map((value, index) => (
          <SwiperSlide>
            <img
              className="client"
              src={"http://localhost:9000/" + value.entry1}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="client-button">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-bold rounded px-2 py-2 ">
          View All
        </button>
      </div>
    </div>
  );
}
