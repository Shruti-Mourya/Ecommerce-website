import deals from "../assets/deals1.jpg";

function Deals(){
    return(
        <>
        
        <section>
    <div class="container-fluid bg-dark">
        <div className="container">
      <div class="latest-products">
        <div class="latest-text text-light deal-heading">DEALS AND OFFERS</div>


        <div class="row deals">
          <div class="col-lg-4 col-md-4 col-sm-4 ">
            <div class="deals-img">
              <img src={deals} alt="" />
            </div>
          </div>



          <div class="col-lg-4 col-md-4 col-sm-4 ">
            <div class="deals-img">
              <img src={deals} alt="" />
            </div>
          </div>


          <div class="col-lg-4 col-md-4 col-sm-4 deal-head ">
            <div class="deals-img">
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