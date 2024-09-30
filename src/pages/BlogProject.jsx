import { FaGithub } from "react-icons/fa";

export default function BlogProject() {
  return (
    <>
      <div
        className="flex items-center mt-20 flex-col"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <h1 className="text-[5rem] font-thin">FOOTBALL BLOG</h1>
        <div className="flex justify-center items-center gap-5">
          <p className="text-xl">React</p>
          <p className="text-xl">Sass</p>
          <p className="text-xl">Node.js</p>
          <p className="text-xl">MySQL</p>
        </div>
        <p className="text-center max-w-[45%] mt-5">
          This is the first project I created, a football blog platform where
          users can create, edit, and view blog posts.
        </p>
        <div className="flex justify-center items-center gap-10">
          <a
            href="https://github.com/pseudocod/Blogging-Full-Stack-Web-App.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
          >
            <div className="flex justify-center items-center gap-3 hover:opacity-80 transition-opacity">
              <FaGithub className="text-3xl" />
              <p className="text-lg">Github Repository</p>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-[50vw] mx-auto flex flex-col gap-10 p-5">
        <img
          src="/blog app/login.JPG"
          alt="Login section"
          className="shadow-md rounded-md"
        />
        <img
          src="/blog app/create-blog.JPG"
          alt="Creating a blog functionality"
          className="shadow-md rounded-md"
        />
        <img
          src="/blog app/single-blog.JPG"
          alt="Home page blog post details"
          className="shadow-md rounded-md"
        />
        <img
          src="/blog app/blog-post.JPG"
          alt="Article Details"
          className="shadow-md rounded-md"
        />
      </div>
    </>
  );
}
