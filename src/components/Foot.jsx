function Foot(){
    return(
        <>
        <section>
    <div class="container-fluid bg-dark">
      <div class="row foot-head pb-5">

        {/*-------------------------------------ABOUT--------------------------------------*/}
        <div class="col-lg-3">
          <div class="about">
            <h5 class="foot-h5 text-light  pt-5">ABOUT</h5>
            <p class="foot-p text-light px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus porro maiores quidem consectetur neque doloribus facilis, reiciendis laudantium quam doloremque!</p>
          </div>
        </div>
        {/* --------------------------------------------SERVICES-------------------------------------- */}
        <div class="col-lg-3 ">
          <div class="services pt-5 px-0">
            <h4 class="foot-h4 text-light">OUR SERVICES</h4>
          </div>
          <ul class="foot-list px-0">
            <li class="foot-list-item text-light">My Account</li>
            <li class="foot-list-item text-light">Order History</li>
            <li class="foot-list-item text-light">Wishlist</li>
            <li class="foot-list-item text-light">Vendor Contact</li>
            <li class="foot-list-item text-light">Purchases</li>
          </ul>
        </div>
        {/* ----------------------------------------------INFORMATION---------------------------------------------------> */}
        <div class="col-lg-3 ">
          <div class="services pt-5 px-0">
            <h4 class="foot-h4 text-light">INFORMATION</h4>
          </div>
          <ul class="foot-list px-0">
            <li class="foot-list-item text-light">About Us</li>
            <li class="foot-list-item text-light">New Collection</li>
            <li class="foot-list-item text-light">BestSellers</li>
            <li class="foot-list-item text-light" id="review">Reviews</li>
            <li class="foot-list-item text-light">Privacy Policy</li>
            <li class="foot-list-item text-light">Terma And Conditions</li>
          </ul>
        </div>
        {/*---------------------------------Newsettelers-------------------------------------------------------------> */}

        <div class="col-lg-3 ">
          <div class="newsetteler">
            <h5 class="foot-h5 text-light pt-5 px-0">NEWSETTELER</h5>
          </div>
          <div class="foot-p text-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio sapiente doloribus ipsam! Temporibus, totam.</div>
          <div class="email-input p-3 px-0">
            <input type="email" class="input p-2 bg-light text-secondary rounded" placeholder="Email" />
          </div><br />
          <button class="btn bg-danger rounded text-light login ">Login</button>

        </div>
      </div>

      {/* -------------------------------footer link----------------------------------------> */}
      <section>
        <div class="container-fluid">
          <div class="footer-link">
            {/* --------------------------------------link---------------------------------------------------> */}
            <div class="foot-link ms-0">
              <p class="text-light">copyright@2020. All Rights Reserved | Designed and Developed by SHRUTI MOURYA</p>
            </div>
            {/* ------------------------------------------icons-----------------------------------------------> */}

            <div class="foot-icon me-0" id="contact">
              <div class="fab fa-facebook text-light p-2"></div>
              <div class="fab fa-twitter text-light p-2"></div>
              <div class="fab fa-whatsapp text-light p-2"></div>
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