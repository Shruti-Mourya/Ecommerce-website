import "../App.css";

export default function () {
  return (
    <>
    <body>
      <div className="container-fluid about-background">
        <h3 className="about-heading container">WHO WE ARE?</h3>
    <br />
        <p className="about-content container">
          Fashiontastic is guided by four principles: customer obsession rather
          than competitor focus, passion for invention, commitment to
          operational excellence, and long-term thinking. Fashiontastic strives to be
          Earth’s most customer-centric company, Earth’s best employer, and
          Earth’s safest place to work. Customer reviews, 1-Click shopping,
          personalized recommendations, Prime, Fulfillment by Fashiontastic, AWS,
          Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire
          TV, Fashiontastic Echo, Alexa, Just Walk Out technology, Fashiontastic Studios, and
          The Climate Pledge are some of the things pioneered by Us.
        </p>
    <br />
        <section>
            <div className="container-fluid cards-section">
          <div class="container about-us" id="about">
            <div class="row justify-content-center ">
              <h4 className="about-card card-heading-1">OUR POLICIES</h4>
              <p className="about-text card-text-1">
                We engage with policymakers on a wide range of issues that are
                important to our customers and employees. Learn more about our
                views on current policy issues.
              </p><br />
              <button className="about-btn ">Learn More </button>
            </div>
          </div>
          <div class="container about-us" id="about">
            <div class="row justify-content-center ">
              <h4 className="about-card card-heading-1">OUR POSITIONS</h4>
              <p className="about-text card-text-1">
              While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful.
              </p>
              <button className="about-btn ">Learn More </button>
            </div>
          </div>
          </div>
        </section>
      </div>
      </body>
    </>
  );
}
