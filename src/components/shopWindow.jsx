import classes from '../styles/ShopWindow.module.css';

function ShopWindow({ data, loading, error, incrementCart, sendToCart }) {
  function handleClick(id) {
    incrementCart();
    sendToCart(id);
  }

  return (
    <div className={classes.shopWindow}>
      <div>
        {loading && <div>Loading posts...</div>}
        {error && <div>{error}</div>}
      </div>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className={classes.itemClass}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <p>{item.title}</p>
              <p className={classes.price}>${item.price}</p>
              <img className={classes.imgClass} src={item.image} />
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
}
export default ShopWindow;
