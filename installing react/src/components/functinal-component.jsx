const products = ["product-1", "product-2", "product-3"];

export function FunctionComponent() {
  return (
    <div>
      <h2 className="product">products</h2>
      {products.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
}
