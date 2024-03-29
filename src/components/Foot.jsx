function Foot(){
    return(
        <>
        <section>
    <div className="container-fluid bg-dark">
      <div className="row foot-head pb-5">

        {/*-------------------------------------ABOUT--------------------------------------*/}
        <div className="col-lg-3">
          <div className="about">
            <h5 className="foot-h5 text-light  pt-5">ABOUT</h5>
            <p className="foot-p text-light px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus porro maiores quidem consectetur neque doloribus facilis, reiciendis laudantium quam doloremque!</p>
          </div>
        </div>
        {/* --------------------------------------------SERVICES-------------------------------------- */}
        <div className="col-lg-3 ">
          <div className="services pt-5 px-0">
            <h4 className="foot-h4 text-light">OUR SERVICES</h4>
          </div>
          <ul className="foot-list px-0">
            <li className="foot-list-item text-light">My Account</li>
            <li className="foot-list-item text-light">Order History</li>
            <li className="foot-list-item text-light">Wishlist</li>
            <li className="foot-list-item text-light">Vendor Contact</li>
            <li className="foot-list-item text-light">Purchases</li>
          </ul>
        </div>
        {/* ----------------------------------------------INFORMATION---------------------------------------------------> */}
        <div className="col-lg-3 ">
          <div className="services pt-5 px-0">
            <h4 className="foot-h4 text-light">INFORMATION</h4>
          </div>
          <ul className="foot-list px-0">
            <li className="foot-list-item text-light">About Us</li>
            <li className="foot-list-item text-light">New Collection</li>
            <li className="foot-list-item text-light">BestSellers</li>
            <li className="foot-list-item text-light" id="review">Reviews</li>
            <li className="foot-list-item text-light">Privacy Policy</li>
            <li className="foot-list-item text-light">Terma And Conditions</li>
          </ul>
        </div>
        {/*---------------------------------Newsettelers-------------------------------------------------------------> */}

        <div className="col-lg-3 ">
          <div className="newsetteler">
            <h5 className="foot-h5 text-light pt-5 px-0">NEWSETTELER</h5>
          </div>
          <div className="foot-p text-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio sapiente doloribus ipsam! Temporibus, totam.</div>
          <div className="email-input p-3 px-0">
            <input type="email" className="input p-2 bg-light text-secondary rounded" placeholder="Email" />
          </div><br />
          <button className="btn bg-danger rounded text-light login ">Login</button>

        </div>
      </div>

      {/* -------------------------------footer link----------------------------------------> */}
      <section>
        <div className="container-fluid">
          <div className="footer-link">
            {/* --------------------------------------link---------------------------------------------------> */}
            <div className="foot-link ms-0">
              <p className="text-light">copyright@2020. All Rights Reserved | Designed and Developed by SHRUTI MOURYA</p>
            </div>
            {/* ------------------------------------------icons-----------------------------------------------> */}

            <div className="foot-icon me-0" id="contact">
              <div className="fab fa-facebook text-light p-2"></div>
              <div className="fab fa-twitter text-light p-2"></div>
              <div className="fab fa-whatsapp text-light p-2"></div>
            </div>
          </div>
        </div>
      </section>


    </div>
  </section>
        
        
        
        
        </>
    );
}
export default Foot;