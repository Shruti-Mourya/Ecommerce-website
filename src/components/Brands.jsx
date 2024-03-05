import brand1 from "../assets/brand-logo1.png";
import brand2 from "../assets/brand-logo2.png";
import brand3 from "../assets/brand-logo3.png";
import brand4 from "../assets/brand-logo4.png";
import brand5 from "../assets/brand-logo5.png";
import brand6 from "../assets/brand-logo6.png";

function Brands(){
  return(
    <>
  <section>
    <div className="container-fluid bg-dark">
      <div className="">
        <div class="brand-heading bg-dark text-light container">
          ORDER FROM YOUR FAVOURITE BRAND
        </div>
        <div class="row brand-logos bg-light">
          
          <div class="col logo-item">
            <img src={brand1} alt="" />
          </div>


          <div class="col logo-item pt-4">
            <img src={brand2} alt="" />
          </div>


          <div class="col logo-item">
            <img src={brand3} alt="" />
          </div>


          <div class="col logo-item">
            <img src={brand4} alt="" />
          </div>


          <div class="col logo-item">
            <img src={brand5} alt="" />
          </div>


          <div class="col logo-item">
            <img src={brand6} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  </section>
  </>
  );
}

export default Brands;
