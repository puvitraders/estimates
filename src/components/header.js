import logo from "../static/img/logo.png";

export default function Header() {
  return (
    <header>
      <h3 className="text-center mb-3">Estimate</h3>

      <div className="row my-5 pt-company">
        <div className="col-6 offset-1">
          <h5>Puvi Traders</h5>
          <h6>C-182, South City</h6>
          <h6>Lucknow - 226025</h6>
        </div>
        <div className="col-3 offset-1">
          <img src={logo} />
        </div>
      </div>
    </header>
  );
}
