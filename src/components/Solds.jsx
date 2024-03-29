import cloth1 from "../assets/cloth1.jpg";
import cloth2 from "../assets/cloth2.jpg";
import cloth3 from "../assets/cloth3.jpg";
import cloth4 from "../assets/cloth4.jpg";
import Button from "./Button";

function Solds(){
    return(
<>
<section>
    <div className="container-fluid bg-dark">
        <div className="container">
      <div className="sales-heading text-light" id="mens">
        TRY OUR HOT SOLDS
      </div>


      <div className="sales-content">
        <div className=" item-card p-3">
          <div className="item-card-content">
            <div className="card-img">
              <img src={cloth1} alt="" />
            </div>
            <div className="card-text p-3">
              <h6 className="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 className="card-price text-secondary">$150.00</h6>
             <Button />
            </div>
          </div>
        </div>


        <div className=" item-card p-3">
          <div className="item-card-content">
            <div className="card-img">
              <img src={cloth2} alt="" />
            </div>
            <div className="card-text p-3">
              <h6 className="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 className="card-price text-secondary">$150.00</h6>
              <Button />
             
            </div>
          </div>
        </div>


        <div className=" item-card p-3">
          <div className="item-card-content">
            <div className="card-img">
              <img src={cloth3} alt="" />
            </div>
            <div className="card-text p-3">
              <h6 className="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 className="card-price text-secondary">$150.00</h6>
              <Button />
            </div>
          </div>
        </div>


        <div className=" item-card p-3">
          <div className="item-card-content">
            <div className="card-img">
              <img src={cloth4} alt="" />
            </div>
            <div className="card-text p-3">
              <h6 className="card-h6 text-light">Lorem, ipsum dolor.</h6>
              <h6 className="card-price text-secondary">$150.00</h6>
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