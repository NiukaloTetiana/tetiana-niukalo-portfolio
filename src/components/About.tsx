import { BsFolderSymlinkFill } from "react-icons/bs";
import photo from "../assets/images/photo.jpg";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="title" data-content="Resume">
          About <span className="text-accentColor">me</span>
        </h2>

        <div className="md:flex md:gap-4 lg:gap-20">
          <div className="lg:w-[420px mx-auto mb-7 flex size-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full shadow-md md:mx-0 md:mb-0 md:h-[480px] md:w-[320px] md:rounded-[30px] lg:h-[600px]">
            <img
              className="h-full w-full object-cover"
              src={photo}
              alt="Tetiana Niukalo photo"
              loading="lazy"
            />
          </div>

          <div className="lg:pt-[180px]">
            <h1 className="custom-transition relative mb-4 text-center font-fontSecondary text-[38px] uppercase leading-[1.1] text-accentColor before:hidden before:content-['&mdash;'] md:text-start md:text-[54px] lg:text-[70px] lg:before:absolute lg:before:left-[-55px] lg:before:top-0 lg:before:inline-block">
              I&#8217;m Tetiana Niukalo.
              <span className="block text-[28px] text-textColor md:text-[40px] lg:text-[54px]">
                Fullstack Developer
              </span>
            </h1>
            <p className="custom-transition mb-6 w-full text-center text-[15px] font-semibold leading-[1.5] tracking-[-0.03em] text-textColor md:w-[360px] md:text-start md:text-[16px] lg:w-[490px]">
              With a passion for continuous learning and growth, I am committed
              to taking on new challenges with enthusiasm. I take a responsible
              approach to time management and understand the importance of
              deadlines. I approach challenges with curiosity and see every
              experience as an opportunity for self-improvement.
            </p>
            <a
              href="https://drive.google.com/file/d/1rXDNQ1smYqRzwxFxOLD00MdNYlqd0ZPs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="button group mx-auto !w-[140px] md:mx-0 md:!w-[180px]"
            >
              View CV
              <span className="button-span flex items-center justify-center bg-hoverColor">
                <BsFolderSymlinkFill className="custom-transition z-10 size-4 fill-textColor md:size-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
