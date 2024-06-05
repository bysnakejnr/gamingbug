import TeamMember from './TeamMember.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const settings = {
        dots: true,
        speed: 1000,
        lazyLoad: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };

    const teamMembers = [
        {
        name: "Ali Ak",
        role: "Co-Founder",
        photo: "../../public/Team/Ali-WB.jpg",
        id: 1
        },
        {
            name: "Alperen",
            role: "Designer",
            photo: "../../public/Team/Alperen-2.png",
            id: 2
        },
        {
            name: "Batuhan Ersoy",
            role: "Designer",
            photo: "../../public/Team/BatuhanErsoy-1.png",
            id: 2
        },
        {
            name: "Emre Bozkurt",
            role: "Designer",
            photo: "../../public/Team/EmreBozkurt-1.png",
            id: 2
        },
        {
            name: "Finn",
            role: "Designer",
            photo: "../../public/Team/Finn.jpg",
            id: 2
        },
        {
            name: "Goncalo",
            role: "Designer",
            photo: "../../public/Team/Goncalo.JPG",
            id: 2
        },
        {
            name: "Hazar",
            role: "Co-Founder",
            photo: "../../public/Team/Hazar-WB.jpg",
            id: 2
        },
        {
            name: "Kaan",
            role: "Designer",
            photo: "../../public/Team/Kaan.jpg",
            id: 2
        },
        {
            name: "Murat",
            role: "Designer",
            photo: "../../public/Team/Murat-WB.jpg",
            id: 2
        },
        {
            name: "Neil",
            role: "Designer",
            photo: "../../public/Team/Neil.png",
            id: 2
        },
        {
            name: "Nisa",
            role: "Designer",
            photo: "../../public/Team/Nisa-1.png",
            id: 2
        },



        ];


return(



   <>


       <div className="">
           <h1 className="heavy-font text-center text-4xl pt-24 pb-12">OUR TEAM</h1>
           <Slider {...settings}>
               {teamMembers.map(member => (

                   <TeamMember
                       name={member.name}
                       photo={member.photo}
                       role={member.role}

                   />

               ))}
           </Slider>
       </div>

   </>)
}


export default Team;