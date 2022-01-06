import { Hero, Footer, Card, Testimoni } from "../components";

import { BsPeople, BsBuilding, BsGlobe2 } from "react-icons/bs";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero></Hero>
      <div
        className="relative z-10 flex flex-wrap justify-center"
        style={{ marginTop: "-70px" }}
      >
        <Card
          icon={<BsPeople size="25px"></BsPeople>}
          title="Our Clients"
          text="Thousands of customers have used our services"
        ></Card>
        <Card
          icon={<BsBuilding size="25px"></BsBuilding>}
          title="Our Projects"
          text="Our projects are spread all over Indonesia"
        ></Card>
        <Card
          icon={<BsGlobe2 size="25px"></BsGlobe2>}
          title="Our Network"
          text="Our network are available throughout Indonesia"
        ></Card>
      </div>
      <div className="container mx-auto my-12">
        <Slider className="slick" {...settings}>
          <Testimoni></Testimoni>
          <Testimoni></Testimoni>
          <Testimoni></Testimoni>
        </Slider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
