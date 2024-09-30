import { FaGithub } from "react-icons/fa";

export default function Oricand() {
  return (
    <>
      <div>
        <div
          className="flex items-center h mt-20 flex-col"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h1 className="text-[5rem] font-thin">ORICÂND</h1>
          <div className="flex justify-center items-center gap-5">
            <p className="text-xl">React</p>
            <p className="text-xl">Spring Boot</p>
            <p className="text-xl">Material-UI</p>
            <p className="text-xl">PostgreSQL</p>
          </div>
          <p className="text-center max-w-[45%] mt-5">
            ORICÂND is my largest project to date, showcasing a fully functional
            e-commerce platform. This application emphasizes an intuitive user
            experience and visually appealing design, enhanced by responsive
            features and animations. I focused on implementing user
            authentication, product management, and order processing, allowing
            users to browse, filter, and purchase items seamlessly.
          </p>
          <div className="flex justify-center items-center gap-14">
            <a
              href="https://github.com/pseudocod/DDShop-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              <div className="flex justify-center items-center gap-3 hover:opacity-80 transition-opacity">
                <FaGithub className="text-4xl" />
                <p className="text-xl">Front-End</p>
              </div>
            </a>

            <a
              href="https://github.com/pseudocod/DDShop"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5"
            >
              <div className="flex justify-center items-center gap-3  hover:opacity-80 transition-opacity">
                <FaGithub className="text-4xl" />
                <p className="text-xl">Back-End</p>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-[60vw] mx-auto flex flex-col gap-10 p-5">
          <img
            src="/proiect-cafea/cafe.JPG"
            alt="Home Page"
            className="shadow-md rounded-md"
          />
          <img
            src="/proiect-cafea/carusel.JPG"
            alt="HomePage Carousel"
            className="shadow-md rounded-md"
          />
          {/* <img
            src="/proiect-cafea/all.JPG"
            alt="All Products Section"
            className="shadow-md rounded-md"
          /> */}
          <img
            src="/proiect-cafea/products.JPG"
            alt="Filtered Products"
            className="shadow-md rounded-md"
          />
          <img
            src="/proiect-cafea/product-details.JPG"
            alt="Product Details"
            className="shadow-md rounded-md"
          />
          <img
            src="/proiect-cafea/cart.JPG"
            alt="Cart Section"
            className="shadow-md rounded-md"
          />
          <img
            src="/proiect-cafea/confirm.JPG"
            alt="Order Completed Section"
            className="shadow-md rounded-md"
          />
        </div>
      </div>
    </>
  );
}
