import aboutData from "../data/en/AboutSection.json";


const About:React.FC = ()=> {
    const {title, description, cards, sectionTitle, sectionDescription} = aboutData.aboutInitiative;
  return (
    <div className="wrapper about my-15">
        <div className="inner-wrapper flex flex-cols justify-between md:flex-row z-2">
            <div className="let-blk w-[100%] md:w-[55%]">
                <h2 className="sec-title text-primary font-bold mb-5">{title}</h2>
                <p>{description}</p>
                <div className="info-box-wrapper relative flex flex-row gap-3 my-10">
                    {cards && cards.map((card)=>(
                        <div className="info-box">
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="right-blk w-[100%] md:w-[40%]">
                <div className="about-sec-imgblk w-[100%] md:max-w-[480px] h-[270px]"></div>
                <div className="pl-5 mt-10 m-auto">
                    <h3 className="sub-title text-primary font-bold mb-3">{sectionTitle}</h3>
                    <p>{sectionDescription}</p>
                </div>
            </div>
        </div>
        <div className="pattern-bg z-1"></div>
    </div>
  )
}

export default About;