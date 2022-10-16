import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
  // get products data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //   get cart data
  /*1. local storage theke data niye savedCart er moddhe rakhbo
    2. savedCart theke for in loop er maddhome id gula nibo
    3. savedCart er id gula and ager products er id gula same kina check korbo, same hoile id er data gula addedProducts er moddhe rakhbo
    4. addedProducts jodi true hoy thle savedCart er id er value quantity er moddhe rkhbo
    5. addedProducts er quantity ta update korbo savedCart er theke neya quantity dhara
    6. addedProducts er data gula initialCart array er moddhe push kore dibo*/
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProducts = products.find((product) => product.id === id);
    if (addedProducts) {
      const quantity = savedCart[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }
  return { products, initialCart };
};
