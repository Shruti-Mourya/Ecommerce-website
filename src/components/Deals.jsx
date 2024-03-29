import deals from "../assets/deals1.jpg";

function Deals(){
    return(
        <>
        
        <section>
    <div className="container-fluid bg-dark">
        <div className="container">
      <div className="latest-products">
        <div className="latest-text text-light deal-heading">DEALS AND OFFERS</div>


        <div className="row deals">
          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <div className="deals-img">
              <img src={deals} alt="" />
            </div>
          </div>



          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <div className="deals-img">
              <img src={deals} alt="" />
            </div>
          </div>


          <div className="col-lg-4 col-md-4 col-sm-4 deal-head ">
            <div className="deals-img">
              <img src={deals} alt="" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  </section>

        </>

    );
}
export default Deals;