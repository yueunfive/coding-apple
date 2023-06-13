export default function Item(props) {
  return (
    <div className="container">
      <div className="row">
        {props.shoes.map(function (a, i) {
          return (
            <div className="col-md-4">
              <img
                src={
                  "https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"
                }
                width="80%"
              />
              <h4>{a.title}</h4>
              <p>{a.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
