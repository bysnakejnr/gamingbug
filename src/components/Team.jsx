import Carousel from "react-multi-carousel";

function Team() {
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
       <Carousel
           additionalTransfrom={0}
           afterChange={function(previousSlide,_ref){var currentSlide=_ref.currentSlide;_ref.onMove;return alert("previous slide is "+previousSlide+" currentSlide is "+currentSlide)}}
           arrows
           autoPlaySpeed={3000}
           centerMode={false}
           className=""
           containerClass="container"
           dotListClass=""
           draggable
           focusOnSelect={false}
           infinite
           itemClass=""
           keyBoardControl
           minimumTouchDrag={80}
           pauseOnHover
           renderArrowsWhenDisabled={false}
           renderButtonGroupOutside={false}
           renderDotsOutside={false}
           responsive={{
               desktop: {
                   breakpoint: {
                       max: 3000,
                       min: 1024
                   },
                   items: 1
               },
               mobile: {
                   breakpoint: {
                       max: 464,
                       min: 0
                   },
                   items: 1
               },
               tablet: {
                   breakpoint: {
                       max: 1024,
                       min: 464
                   },
                   items: 1
               }
           }}
           rewind={false}
           rewindWithAnimation={false}
           rtl={false}
           shouldResetAutoplay
           showDots
           sliderClass=""
           slidesToSlide={1}
           swipeable
       >
           <img url="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <img url="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
           <img url="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <img url="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <img url="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
       </Carousel>


   </> )
}


export default Team;