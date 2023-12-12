import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrusel-dinamico.css";

// import required modules
import {
  EffectCreative,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { Link as LinkRouter } from "react-router-dom";

export default function CarrouselHomeDinamico() {
  const data = [
    {
      slide: 1,
      items: [
        {
          id: 1,
          name: "Muzzarella",
          page: "products",
          image:
            "https://media.istockphoto.com/id/480211504/es/foto/rasgado-bola-de-queso-mozzarella-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=-MDBb4Ig2ajgjvjMAkd5zYUAIJd8gZX9InLBR7QaUNw=",
        },
        {
          id: 2,
          name: "RICOTTA",
          page: "products",
          image:
            "https://media.istockphoto.com/id/474986880/es/foto/queso-tipo-cottage-en-blanco-bowl-en-la-antigua-mesa.jpg?s=612x612&w=0&k=20&c=T94uVbBdZeefFLLvBqmPx8LzJ1e3hcVTiHUGdMF0tUE=",
        },
        {
          id: 3,
          name: "Parmesano",
          page: "products",
          image:
            "https://media.istockphoto.com/id/450151831/es/foto/queso-parmesano.jpg?s=612x612&w=0&k=20&c=RlExsYOUjWumHbf37i3Zfz2-0PhCYaGMDmOmIUHj7L0=",
        },
        {
          id: 4,
          name: "Cheddar",
          page: "products",
          image:
            "https://media.istockphoto.com/id/531048915/es/foto/queso-cheddar.jpg?s=612x612&w=0&k=20&c=LPVUcxzF7heZASW4cG7BWg98tVFkp7uVtJT88x-Lc3I=",
        },
      ],
    },
    {
      slide: 2,
      items: [
        {
          id: 5,
          name: "Salame",
          page: "products",
          image:
            "https://media.istockphoto.com/id/528304460/es/foto/salame-acercamiento.jpg?s=612x612&w=0&k=20&c=f4hnnZfN1uUenTik_tfx3II-UaYf9s6QYLs2pCPbVXY=",
        },
        {
          id: 6,
          name: "Morcilla",
          page: "products",
          image:
            "https://media.istockphoto.com/id/547146412/es/foto/kaszanka-morcilla-con-chucrut.jpg?s=612x612&w=0&k=20&c=4f0NRHYKLSUL80kr9C1AVA8l76vO_uP4pbLk6Loi81Q=",
        },
        {
          id: 7,
          name: "Chorizo",
          page: "products",
          image:
            "https://media.istockphoto.com/id/917583612/es/foto/chorizo-salchichas-con-mostaza.jpg?s=612x612&w=0&k=20&c=kpGg9IupsNFCqJagN3lFj0Sf3OTXVFHi5aErTCKPnPk=",
        },
        {
          id: 8,
          name: "Salchicha",
          page: "products",
          image:
            "https://media.istockphoto.com/id/1352284702/es/foto/salchichas-frankfurter-en-una-bandeja-de-madera-con-hierbas-fondo-negro-vista-superior.jpg?s=612x612&w=0&k=20&c=fEgg59nE040dBPdPJy0wFJbGdV0ZThKsBKo7rQ2dWzM=",
        },
      ],
    },
    {
      slide: 3,
      items: [
        {
          id: 9,
          name: "Picada Jamones",
          page: "combos",
          image:
            "https://media.istockphoto.com/id/1362972720/es/foto/vista-de-cerca-de-una-deliciosa-mesa-de-jam%C3%B3n-serrano-jam%C3%B3n-cocido-y-colilla-de-cerdo-en.jpg?s=612x612&w=0&k=20&c=BxBvCUwe2zFV-u5NQcruZHQTPiY2jN9Vd49ttoGuxPI=",
        },
        {
          id: 10,
          name: "Picada completa",
          page: "combos",
          image:
            "https://media.istockphoto.com/id/1264187532/es/foto/exquisitos-embutidos-de-carne-y-varios-quesos-en-una-bandeja-de-madera.jpg?s=612x612&w=0&k=20&c=GYjAO9Ps_b5ywebX5wIUMy71jwxD5sGPSHTjzqFyafA=",
        },
        {
          id: 11,
          name: "Picada jamon, queso y salame",
          page: "combos",
          image:
            "https://media.istockphoto.com/id/629023720/es/foto/embutidos-y-quesos.jpg?s=612x612&w=0&k=20&c=R-TIU421YNHyww33kJ-8xPMTQrI_fAIxa2hrWLcEF6k=",
        },
        {
          id: 12,
          name: "Picada mixta",
          page: "combos",
          image:
            "https://media.istockphoto.com/id/1066930210/es/foto/aperitivo-mediterr%C3%A1neo-delicioso-tiro-desde-arriba.jpg?s=612x612&w=0&k=20&c=Dh48LGAz1uuk8DNAqMnyxVWhGGNPimLkK9b1t-m_qdE=",
        },
      ],
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={`creative`}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Navigation, Pagination, Autoplay]}
        className="mySwiper">
        {" "}
        {data &&
          data.map((slide, index) => (
            <SwiperSlide key={index}>
              <Grid container height={"100%"}>
                {" "}
                {slide.items.map((item) => {
                  return (
                    <Grid
                      key={item.id}
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      className="carrousel_grid_item">
                      <LinkRouter to={"/" + item.page}>
                        <div
                          style={{
                            backgroundImage: "url(" + item.image + ")",
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: " center top ",
                          }}>
                          <div className="carrousel_item_name_container"> </div>{" "}
                          <Typography
                            variant="h5"
                            className="carrousel_item_name_title">
                            {" "}
                            {item.name}{" "}
                          </Typography>{" "}
                        </div>{" "}
                      </LinkRouter>{" "}
                    </Grid>
                  );
                })}{" "}
              </Grid>{" "}
            </SwiperSlide>
          ))}{" "}
      </Swiper>{" "}
    </>
  );
}
