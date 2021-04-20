import "../static/styles/app.scss";
import Header from "./header";
import Products from "./products";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <Products />
    </div>
  );
}
