function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = ` https://my-json-server.typicode.com/rok92/hnm-shoppingmall/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
