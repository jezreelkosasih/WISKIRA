import list from "../listdata/list";

const Makanan =()=> {
    return (
        <div className="makananSection">
            {list.map((list)=>{
                return(
                    <div className="">
                        <img src={list.imgUrl} alt="" />
                        <div>
                            <h1><b>{list.nama}</b></h1>
                            <p>{list.harga}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Makanan;