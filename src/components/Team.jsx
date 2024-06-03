import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


return(



   <>
       <h1 className="heavy-font text-center text-4xl pt-24 pb-12">OUR TEAM</h1>
       <div className="containerTeam">
           <div className="box">
           <div className="imgBox">
               <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
           </div>
           <div className="content">
               <h2>Karan Singh<br/>
               <span>Graphic Designer</span></h2>
       </div>
   </div>
   <div className="box">
       <div className="imgBox">
           <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
       </div>
       <div className="content">
           <h2>Dolly Seth<br/>
               <span>Digital Marketing</span></h2>
       </div>
   </div>
    <div className="box">
        <div className="imgBox">
            <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
        </div>
        <div className="content">
            <h2>Aakash Agrawal<br/>
                <span>Chartered Accountant C.A</span></h2>
        </div>
    </div></div>

<h1>HELLO</h1>

       <Carousel className="containerTeam"
                 swipeable={false}
                 draggable={false}
                 showDots={false}
                 responsive={responsive}
                 ssr={true} // means to render carousel on server-side.
                 infinite={true}
                 autoPlaySpeed={1000}
                 keyBoardControl={true}
                 customTransition="all .5"
                 transitionDuration={500}
                 containerClass="container-padding-bottom"
                 removeArrowOnDeviceType={["tablet", "mobile"]}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-20-px"
       >
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Ali-WB.jpg"
                   alt=""/></div>
               <div className="content">
                   <h2>Ali Ak<br/>
                       <span className="pt-12">Co-Founder</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Alperen-2.png"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/BatuhanErsoy-1.png"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/EmreBozkurt-1.png"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Finn.jpg"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Goncalo.JPG"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Hazar-WB.jpg"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Kaan.jpg"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Murat-WB.jpg"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Neil.png"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>
           <div className="box">
               <div className="imgBox"><img
                   src="../../public/Team/Nisa-1.png"
                   alt=""/></div>
               <div className="content">
                   <h2>Aakash Agrawal<br/>
                       <span>Chartered Accountant C.A</span></h2>
               </div>
           </div>

       </Carousel>;


   </>)
}


export default Team;