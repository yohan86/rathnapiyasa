import NavBar from "./NavBar";

const Header = ()=> {
  return (
    <div className="header wrapper">
        <div className="inner-wrapper flex flex-cols justify-between">
            <div className="site-logo w-[120px] h-auto">
                <img src="./images//logo.png" alt="Rathna piyasa - Sri Lanka" className="w-full" />
            </div>
            <div className="">
                <div className="menu-wrapper mt-5">
                    <NavBar />
                 </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header;