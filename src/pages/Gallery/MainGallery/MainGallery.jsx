import "./MainGallery.css";
import img1 from "../../../assets/images/Gallery/1.jpeg";
import img2 from "../../../assets/images/Gallery/2.jpeg";
import img3 from "../../../assets/images/Gallery/3.jpeg";
import img4 from "../../../assets/images/Gallery/4.jpeg";
import img5 from "../../../assets/images/Gallery/5.jpeg";
import img6 from "../../../assets/images/Gallery/6.jpeg";
import img7 from "../../../assets/images/Gallery/7.jpeg";
import img8 from '../../../assets/images/Gallery/8.jpeg';
import img9 from '../../../assets/images/Gallery/9.jpeg';
import img10 from '../../../assets/images/Gallery/10.jpeg';
import img11 from '../../../assets/images/Gallery/11.jpeg';



const MainGallery = () => {
  let data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
    {
      id: 10,
      img: img10,
    },
    {
      id: 11,
      img: img11,
    }
  ];

  return (
    <div className="mt-5 mb-5">
      <div class="section-head col-sm-12">
        <h4>
          <span>Down the Memory</span> Lane
        </h4>
      </div>

      <div className="mt-5 galleria">
        {data.map((item, index) => (
          <div key={index} className="pics">
            <img src={item.img} alt="gallery" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGallery;
