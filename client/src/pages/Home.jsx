import axios from "axios";
import { useEffect, useState } from "react";
import '../style/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HeaderHome from "../components/header";
import { motion } from "framer-motion"

const Home = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    prevArrow: (
      <button type="button" className="slick-arrow slick-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-arrow slick-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <HeaderHome />
      <div className="container">
        <motion.p
          className="containerHeader"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock Limitless Possibilities: Shop Now and Experience the Power of Cutting-Edge Technology at Your Fingertips.
        </motion.p>
        <Slider className="slider" {...sliderSettings}>
          {data.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="img" />
              <h4>{product.title}</h4>
            </div>
          ))}
        </Slider>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,213.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

    </>
  );
};

export default Home;