import React from "react";

function Box() {
  return (
    <>
      <div
        className="max-w-[90rem] rounded-2xl h-[40rem] bg-white mx-auto text-black fle items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "",
          backgroundImage: `url('https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* <div className="max-w-[85rem] h-[35rem] mx-auto bg-black flex justify-center items-center">
          <div>
            <p>Be True</p>
            <p>Be You</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Box;
