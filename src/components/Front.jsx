import background from "../assets/fashiontastic-background.jpg";

function Front(props) {
  return (
    <>
      <section>
        <div className="main">
          <div className="main-text">
            <h4 class="main-h4 text-light">
              THE ONE STOP SOLUTION FOR ALL YOUR FASHION NEEDS...
              {props.title} {props.sample}
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
export default Front;
