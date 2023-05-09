import orang from "../listdata/orang";
import Navbar from "../Components/Navbar";
const About =()=>{
    return (
        <>
            <Navbar/>
            <div style={{textAlign:"center"}}>
                <b style={{fontSize:"2rem"}}>Customer <i style={{backgroundColor:"#6415FF", borderRadius: '20px !important'}}>Love Us</i></b>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"5vw",justifyContent:"center",width:"70%",margin:"0px auto"}}>
                {orang.map((org)=>{
                    return(
                        <div style={{textAlign:"center"}}>
                            <img src={org.imgUrl} style={{width:"5vw",height:"5vw",borderRadius:"50%",margin:"0px auto"}}alt="" />
                            <div >
                                <p>{org.message}</p>
                                <b>- {org.nama}</b>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default About;