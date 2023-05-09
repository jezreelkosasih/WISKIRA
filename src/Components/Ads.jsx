const Ads = ()=>{
    const h1 = {}
    return (
        <div className="adsSection">
            <div className="adsFlex">
                <div style={{textAlign:"left"}}>
                    <h1 style={{fontSize:"2rem",textAlign:"left"}}>Delicious & Affordable</h1>
                    <h1 style={{backgroundColor:"#6415FF", borderRadius: '20px !important',fontSize:"2rem",transform: "skew(-15deg)",fontWeight:"bold"}} className="text-white"><i>Meals Near You</i></h1>
                    
                    <p>Lorem ipsum dolor sit amet consectectur adispicing elite, set do euismod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
            </div>
            <div className="adsFlex">
                <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
                <div >
                    <h1 style={{fontSize:"2rem",textAlign:"left"}}>We've been serving for</h1>
                    <h1 style={{backgroundColor:"#6415FF", borderRadius: '20px !important',fontSize:"2rem"}}><i>over 5 years</i></h1>
                    <p>Lorem ipsum dolor sit amet,  consectetur adispicing elit, sed do, eisumod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commondo consequat</p>
                    <button>Latest Offers</button>
                </div>
            </div>
        </div>
    );
}

export default Ads;