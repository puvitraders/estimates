import logo from "../static/img/logo.png";

const Company = () => (
  <div className="row my-5 pt-company">
    <div className="col-6">
      <h5>Puvi Traders</h5>
      <h6>C-182, South City</h6>
      <h6>Lucknow - 226025</h6>
      <sub className="mt-1">&#128222;:&#160; 7827-465805</sub>
      <section>
        <sub>
          Website: &#160;
          <a className="link" href="https://www.poovi.in">
            www.poovi.in
          </a>
        </sub>
      </section>
    </div>

    <div className="col-2 offset-4">
      <img src={logo} alt="POOVI" />
    </div>
  </div>
);

export default Company;
