
// import React from "react";

// function Contact() {
//   return (
//     <>
//       <div className="w-full h-[90vh] bg-black flex flex-row text-white font-serif">
//         <div className="ml-10 text-2xl w-1/2">
//           <h1 className="flex justify-start pt-4">CONTACT</h1>
//           <div className="w-28 text-green-500">
//             <hr />
//           </div>

//           <div className="pt-4">
//             <div className="flex flex-row items-center gap-6">
//               <img
//                 className="w-10 h-10"
//                 src="https://img.icons8.com/?size=96&id=gejeldAcScwa&format=png"
//                 alt=""
//               />
//               <h1 className="text-3xl font-display">Kerala Wayanad</h1>
//             </div>
//           </div>

//           <div className="flex flex-row items-center gap-4 pt-6">
//             <img
//               className="pt-4 w-13 h-13"
//               src="https://img.icons8.com/?size=96&id=J9QTpfBIai4P&format=png"
//               alt=""
//             />
//             <div className="pt-7">
//               <h1 className="text-3xl">Call us</h1>
//               <h3 className="text-[1rem]">9526950256</h3>
//             </div>
//           </div>

//           <div className="flex flex-row items-center gap-4 pt-6">
//             <img
//               className="pt-4 w-13 h-13"
//               src="https://img.icons8.com/?size=96&id=bc240UBbpqo0&format=png"
//               alt=""
//             />
//             <div className="pt-7">
//               <h1 className="text-3xl">Email</h1>
//               <h3 className="text-[1rem]">navaneeth@gmail.com</h3>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/2 p-10">
//           <div className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 rounded-md text-white"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 rounded-md text-white"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="p-3 rounded-md text-white"
//             />
//             <div
//               placeholder="Your Message"
//               rows="5"
//               className="p-3 rounded-md text-white"
//             ></div>
//             <div className="flex justify-center items-center">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-fit  "
//             >
//               Send message
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import React from "react";

function Contact() {
  return (
    <>
      <div className="w-full h-[90vh] bg-black flex flex-row text-white font-serif">
        <div className="ml-10 text-2xl w-1/2">
          <h1 className="flex justify-start pt-4">CONTACT</h1>
          <div className="w-28 text-green-500">
            <hr />
          </div>

          <div className="pt-4">
            <div className="flex flex-row items-center gap-6">
              <img
                className="w-10 h-10"
                src="https://img.icons8.com/?size=96&id=gejeldAcScwa&format=png"
                alt=""
              />
              <h1 className="text-3xl font-display">Kerala Wayanad</h1>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 pt-6">
            <img
              className="pt-4 w-13 h-13"
              src="https://img.icons8.com/?size=96&id=J9QTpfBIai4P&format=png"
              alt=""
            />
            <div className="pt-7">
              <h1 className="text-3xl">Call us</h1>
              <h3 className="text-[1rem]">9526950256</h3>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 pt-6">
            <img
              className="pt-4 w-13 h-13"
              src="https://img.icons8.com/?size=96&id=bc240UBbpqo0&format=png"
              alt=""
            />
            <div className="pt-7">
              <h1 className="text-3xl">Email</h1>
              <h3 className="text-[1rem]">navaneeth@gmail.com</h3>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-10">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md text-white bg-black border border-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md text-white bg-black border border-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md text-white bg-black border border-white"
            />
            <textarea
              placeholder="Your Message"
              rows="9"
              className="p-3 rounded-md text-white bg-black border border-white"
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-fit"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
