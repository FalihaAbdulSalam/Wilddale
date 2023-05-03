// import React from "react";
// import "../TestimonialSection.css";

// const testimonials = [
//   {
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut turpis lacus. In hac habitasse platea dictumst. Ut ultrices velit ut ante rutrum vestibulum. Duis vel nisl eu tellus pharetra viverra eget ac lectus.",
//     star: "⭐️⭐️⭐️⭐️⭐️",
//     img: (
//       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150,h_150/https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/09/Testimonial-3-150x150.jpg"  width="150"
//       height="150"/>
//     ),
//   },
//   {
//     name: "Jane Smith",
//     text: "Suspendisse et varius eros. Sed euismod diam diam, a volutpat arcu bibendum sit amet. Nunc nec lacus neque. Praesent in vestibulum urna. Nulla ac mauris sed augue dictum feugiat quis ut metus.",
//     star: "⭐️⭐️⭐️⭐️⭐️",
//   },
//   {
//     name: "Bob Johnson",
//     text: "Nullam sit amet dui dui. Curabitur vel ex et lectus pulvinar sollicitudin. Maecenas pharetra turpis ac felis vestibulum interdum. Quisque euismod, sem eget tristique tristique, dolor ex mattis justo, euismod egestas velit turpis ac ipsum.",
//     star: "⭐️⭐️⭐️⭐️",
//   },
// ];

// const TestimonialSection = () => {
//   return (
//     <div className="testimonial-section">
//       {testimonials.map((testimonial, index) => (
//         <div key={index} className="testimonial">
//           <p className="testimonial-text">{testimonial.text}</p>
//           <p className="testimonial-name">{testimonial.name}</p>
//           <p className="testimonial-star">{testimonial.star}</p>
//           <img className="testimonial-img" src={testimonial.img} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestimonialSection;



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;