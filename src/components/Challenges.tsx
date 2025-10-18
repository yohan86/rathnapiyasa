import challengesData from "../data/en/Challenges.json";


const Challenges:React.FC = ()=> {
    const {titleOne, titleTwo, list, introTitle, challangesIntro, objectives} = challengesData.challenges;
    return (
        <div className="wrapper challenges relative bg-primary text-white py-10">
            <div className="inner-wrapper flex flex-col md:flex-row  z-2 ">
                <div className="challenges-list w-full md:w-[55%] justify-between">
                        <h2 className="text-center !leading-[1.5] md:text-left !text-[22px] md:!text-[40px] font-normal md:pt-8">{titleOne} <br/> {titleTwo}</h2>
                        <div className="challenge-list flex flex-wrap gap-3 my-5 justify-center md:my-15 md:justify-start">
                            {list && list.map((item, index)=>(
                                <div className="flex flex-col w-1/4 text-center items-center mb-5" key={index}>
                                    <img src={`./images/icons/${item.icon}`} width="50px" height="50px" alt={item.label} />
                                    <p className="!leading-[1.1]">{item.label}</p>
                                </div>
                            ))}
                            
                        </div>
                </div>
                <div className="challenges-intro-wrapper w-full md:w-[40%] relative">
                    <div className="challenges-intro w-full text-white px-4 py-8 z-2">
                        <h3 className="text-darkyellow pb-8 text-center !text-[35px]">{introTitle}</h3>
                        <p>{challangesIntro}</p>
                        <ul>
                        {objectives.slice(0,3).map((objitem, index) =>(
                            <li key={index}>{objitem.objintro}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="bg-pattern z-1"></div> 
                </div>
                <span className="leef-bg  right-0 top-0"></span>
                <span className="leef-bg  right-[30%] top-[30%] rotate-45 !opacity-90"></span>
                <span className="leef-bg  right-0 bottom-[-15px] md:right-[-80px] md:bottom-[5%] rotate-110"></span>
                <span className="leef-bg  left-[0] top-[0%] rotate-140"></span>
                <span className="leef-bg  left-[-20px] top-[70%]"></span>
                <span className="leef-bg  left-[30%] top-[-80px] rotate-140"></span>
            </div>
            <span className="leef-bg  left-[0] top-[40%] !z-1"></span>
            <span className="leef-wrapper absolute w-[200px] h-[150px] right-0 top-[20%] overflow-hidden">
                <span className="leef-bg   right-[-30%] top-0 rotate-165 !z-1"></span>
            </span>
            
        </div>
    )
}

export default Challenges;