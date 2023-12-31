import iPhones from '../../assets/images/iphones.jpg';
import iMac from '../../assets/images/mac.jpg';
import tab from '../../assets/images/tab-1.jpg';
import watch from '../../assets/images/watch.jpg';



const Slider = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className="carousel md:h-[800px] bg-base-100 w-full">
        <div id="slide1" className="carousel-item relative  w-full">
          <div className="md:flex justify-around items-center">
            <div className="flex-1 px-20">
              <h3 className="text-xl md:text-3xl text-primary uppercase">Apple products</h3>
              <h2 className="text-3xl my-6 md:text-6xl font-bold text-secondary ">
                iMac 
                <br />Collection 2023
              </h2>
              <h1 className="text-xl md:text-xl font-bold">Tell your Brand story through images. They can capture your audience attention and communicate your message</h1>
            </div>
            <div className="flex-1">
              <img
                className="rounded-3xl w-full h-[500px]"
                src={iMac}
                alt=""
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item  relative w-full">
          {/*Single item*/}
          <div className="md:flex justify-around items-center">
          <div className="flex-1 px-20">
            <h3 className="text-xl md:text-3xl uppercase text-primary">Apple Watches</h3>
            <h2 className="text-3xl my-6 md:text-6xl font-bold text-secondary">
              Watch 
              <br />Collection 2023
            </h2>
            <h1 className="text-xl md:text-xl font-bold">Tell your Brand story through images. They can capture your audience attention and communicate your message</h1>
          </div>
          <div className="flex-1">
            <img
              className="rounded-3xl w-full h-[500px]"
              src={watch}
              alt=""
            />
          </div>
        </div>
          {/*Single item*/}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item  relative w-full"
        >
          {/*Single item*/}
          <div className="md:flex justify-around items-center">
          <div className="flex-1 px-20">
            <h3 className="text-xl md:text-3xl uppercase text-primary">Apple products</h3>
            <h2 className="text-3xl my-6 md:text-6xl font-bold text-secondary">
              Iphone 
              <br />Collection 2023
            </h2>
            <h1 className="text-xl md:text-xl font-bold">Tell your Brand story through images. They can capture your audience attention and communicate your message</h1>
          </div>
          <div className="flex-1">
            <img
              className="rounded-3xl w-full h-[500px]"
              src={iPhones}
              alt=""
            />
          </div>
        </div>
          {/*Single item*/}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/*Single item*/}
          <div className="md:flex justify-around items-center">
          <div className="flex-1 px-20">
            <h3 className="text-xl md:text-3xl uppercase text-primary">Samsung products</h3>
            <h2 className="text-3xl my-6 md:text-6xl font-bold text-secondary">
              Samsung 
              <br />Collection 2023
            </h2>
            <h1 className="text-xl md:text-xl font-bold">Tell your Brand story through images. They can capture your audience attention and communicate your message</h1>
          </div>
          <div className="flex-1">
            <img
              className="rounded-3xl w-full h-[500px]"
              src={tab}
              alt=""
            />
          </div>
        </div>
          {/*Single item*/}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
