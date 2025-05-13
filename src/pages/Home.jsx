

function About() {
  return (
    <>
      <div className="w-[100%] h-[90vh] bg-black flex flex-row ">
        <div className="font-serif font-bold text-6xl ml-10 flex justify-start flex-col w-[60%] ">
          <h1 className="text-white hover:text-green-500 ">FULL STACK </h1>
          <h1 className="text-green-500 ml-30 pt-4  hover:text-white ">DEVELOPER</h1>
          <h1 className="text-white ml-66 pt-4 font-stretch-semi-expanded">
            &
          </h1>
          <h1 className="text-white ml-50 pt-4 font-semibold text-6xl">UI DESIGNER</h1>

          <div className="text-green-500 pt-4 w-[95%]">
            <hr />
          </div>
          <div className="bg-black w-[100%] h-80   ">
         <h1 className="text-white text-3xl pt-3  hover:text-green-500">About Me</h1>
         <p className="text-white text-[1rem] font-normal pt-2">I'm Navaneeth,a passionate <strong>  FULL STACK DEVELOPER </strong>and <strong>UI DESIGNER</strong> committed to creating complete digital experiences,not just a website .with a keen eye for design and a solid foundation in development, 
 I specialize in bridging the gap between aesthetics and functionality. From crafting clean, intuitive user interfaces to building scalable web applications, I bring ideas to life with creativity and precision. I’m constantly learning, building, and pushing the boundaries of what the web can do.</p>
          </div>

        </div>
        <div className=" flex  w-[65%] h-[80vh]    justify-end  ">
          <div className=" bg-black flex justify-end  p-10 ">
            <img className=""
              src="https://res.cloudinary.com/drhipnn1v/image/upload/v1746864044/Group_16_2x_shnezc.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;