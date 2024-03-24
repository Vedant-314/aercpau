import React from "react";
import Layout from "./Layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.avif";

function Home() {
  return (
    <Layout>
      <div className="home-container">
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          // autoPlay={true}
        >
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
        </Carousel>
      </div>
      <div className="text-content">
        <p>Welcome to AERC PAU Website</p>
        <div className="paragraph">
          <span>AGRO ECONOMIC RESEARCH CENTRE - PUNJAB</span>
          <div className="title">Profile</div>
          <div className="content">
            Agro-Economic Research Center- Punjab came into effectual existence
            in 1998 at Punjab Agricultural University, Ludhiana by the
            Directorate of Economics and Statistics, Department of Agriculture
            and Cooperation, Ministry of Agriculture and Farmers Welfare,
            Government of India, New Delhi to carry out research in agricultural
            economics in Punjab. This centre, established under Centrally
            Sponsored Scheme is fully funded by the Ministry of Agriculture and
            Farmers Welfare, Government of India, and it operates under the
            administrative controller of Vice-Chancellor of Punjab Agricultural
            University, Ludhiana.
          </div>
          <div className="title">Objective</div>
          <div className="content">
            To conduct ad hoc investigations into the problems in which the
            Ministry of Agriculture and Farmers Welfare, Government of India is
            especially interested. To carry out research work on problems
            relating to Agricultural Economics of the country and To give
            technical advice to the Government of India and the State Government
            concerned on such issues as with mutual agreement may be referred to
            the Centre.
          </div>
          <div className="title">Responsibilities</div>
          <div className="content">
            The centre focused on problem-oriented studies of immediate policy
            implications to the Government of India and the State Government.
            Its findings and recommendations have helped the Central and State
            Governments in their policy formulation. It covered a broad spectrum
            of subjects including regional planning, crop production, input use
            and supplies, marketing, target group oriented programmes,
            institutions, infrastructure development etc.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
