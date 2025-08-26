import challengesData from "../data/en/Challenges.json";

const Challenges:React.FC = ()=> {
    const {title, list} = challengesData.challenges;
    return (
        <div className="wrapper challenges bg-primary text-white py-10">
            <div className="inner-wrapper flex flex-row">
            <div className="challenges-list w-full md:w-[55%] justify-between">
                    <h2 className="!text-[40px] font-normal">{title}</h2>
                    <div className="challenge-list flex flex-wrap gap-3 my-15">
                        {list && list.map((item)=>(
                            <div className="flex flex-col w-1/4 text-center items-center mb-5">
                                <img src={`/images/icons/${item.icon}`} width="50px" height="50px" alt={item.label} />
                                <p className="!leading-[1.1]">{item.label}</p>
                            </div>
                        ))}
                        
                    </div>
            </div>
            <div className="challenges-intro w-full md:w-[40%]">
                
            </div>
            </div>
        </div>
    )
}

export default Challenges;