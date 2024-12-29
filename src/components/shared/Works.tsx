import Container from "./Container";

const Works = async () => {
  return (
    <div className="bg-gradient-to-r from-[#E4F6F9] to-[#CDEEF3] py-[120px]">
      <Container>
        <h2 className="relative text-3xl font-light tracking-[3px] uppercase text-[#282828]  text-center  after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[80px] after:h-[2px] after:content-[''] after:bg-[#00CECB]">
          Our Best Works
        </h2>
        <p className="text-[#565B5E] max-w-[480px] text-center mx-auto mt-6">
          I help you build brand for your business at an affordable price. Thousands of clients have
          procured exceptional results while working with Me.
        </p>

        <div></div>
      </Container>
    </div>
  );
};

export default Works;
