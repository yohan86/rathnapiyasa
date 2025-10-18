const Slider:React.FC = ()=> {
  return (
    <div className="slider-wrapper wrapper h-[480px] bg-[#0a7c3e]">
        <div className="slider flex flex-col md:flex-row h-[100%] justify-around items-center max-w-[1600px] m-auto gap-0">

            <div className="image-wrapper w-[180px] h-[200px] md:w-[430px] md:h-[430px] z-2 relative">
                <div className="image-blk w-full h-full"></div>
                <div className="image-border w-full h-full"></div>
            </div>
            <div className="slider-intro w-[90%] md:w-[50%] lg:mr-[50px] z-2 text-white">
                <h1 className="text-[22px] lg:text-[50px] text-shadow-[0px_4px_6px_#2b2929]">
                    Empowering <br/>Young Adults with Down Syndrome<br/> & Intellectual Disabilities
                </h1>
                <p className="text-[18px]">Creating a future of inclusion.         
                   Development, and well-being.
                </p>
                <div className="button-wrapper mt-5">
                    <a className="button primary-button link">Learn More</a>
                    <a className="button secondary-button link">Get Involved</a>
                </div>

            </div>
            <span className="overlay z-1"></span>
        </div>
    </div>
  )
}

export default Slider;