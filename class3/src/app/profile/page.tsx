import Footer from "../components/footer"
import Header from "../components/header"


const Profile = ()=> {
    return(
        <div>
        <Header />
        {}
        {}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Zulqarnain Haider</span>
          <br />Learn Next JS 
        </div>
        <div className="childContainer" >
           {}
           <img className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/>
        </div>
      </div>
      <Footer />
        </div>
    )
}

export default Profile