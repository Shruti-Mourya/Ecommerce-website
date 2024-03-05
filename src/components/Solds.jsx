import cloth1 from "../assets/cloth1.jpg";
import cloth2 from "../assets/cloth2.jpg";
import cloth3 from "../assets/cloth3.jpg";
import cloth4 from "../assets/cloth4.jpg";
import Button from "./Button";

function Solds(){
    return(
<>
<section>
    <div class="container-fluid bg-dark">
        <div className="container">
      <div class="sales-heading text-light" id="mens">
        TRY OUR HOT SOLDS
      </div>


      <div class="sales-content">
        <div class=" item-card p-3">
          <div class="item-card-content">
            <div class="card-img">
              <img src={cloth1} alt="" />
            </div>
            <div class="card-text p-3">
              <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 class="card-price text-secondary">$150.00</h6>
             <Button />
            </div>
          </div>
        </div>


        <div class=" item-card p-3">
          <div class="item-card-content">
            <div class="card-img">
              <img src={cloth2} alt="" />
            </div>
            <div class="card-text p-3">
              <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 class="card-price text-secondary">$150.00</h6>
              <Button />
             
            </div>
          </div>
        </div>


        <div class=" item-card p-3">
          <div class="item-card-content">
            <div class="card-img">
              <img src={cloth3} alt="" />
            </div>
            <div class="card-text p-3">
              <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 class="card-price text-secondary">$150.00</h6>
              <Button />
            </div>
          </div>
        </div>


        <div class=" item-card p-3">
          <div class="item-card-content">
            <div class="card-img">
              <img src={cloth4} alt="" />
            </div>
            <div class="card-text p-3">
              <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 class="card-price text-secondary">$150.00</h6>
              <Button />
             
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
export default Solds;