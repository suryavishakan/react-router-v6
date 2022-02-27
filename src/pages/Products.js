import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="content">
      <h3>Hoodies</h3>
      <div className="products">
        {[0, 1, 2, 3].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img
                src="https://img.money.com/2020/01/amazon_hoodie.jpg"
                alt="product"
              />
            </Link>
          </div>
        ))}
      </div>

      <h3>Tees</h3>
      <div className="products">
        {[4, 5, 6, 7].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img
                src="https://img1.cgtrader.com/items/877220/69c16ce714/large/t-shirt-3d-model-obj-mtl-*ZPrj-ZPrj.jpg"
                alt="product"
              />
            </Link>
          </div>
        ))}
      </div>

      <h3>Sneakers</h3>
      <div className="products">
        {[8, 9, 10, 11].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img
                src="https://i.pinimg.com/originals/98/77/6d/98776d4aef96a7cdf31dfd0f1110183b.png"
                alt="product"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
