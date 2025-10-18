import NavBar from "./NavBar";

const Header = ()=> {
  return (
    <div className="header wrapper">
        <div className="inner-wrapper flex flex-cols justify-between">
            <div className="site-logo w-[82px] md:w-[120px] h-auto">
                <img src="./images/logo.png" alt="Rathna piyasa - Sri Lanka" className="w-full" />
            </div>
            <div className="">
              <NavBar  menuIcon={true} />
            </div>
           
        </div>
    </div>
  )
}

export default Header;