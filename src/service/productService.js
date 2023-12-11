export const getProducts = async(settings,page = 1) => {
    
    let url = `http://localhost:4000/api/products/?page=${page}`;
    if (settings.radio && settings.radio !== "all") {
        url += `&category=${settings.radio}`;
      }
      if (settings.text) {
        url += `&name=${settings.text}`;
      }
    try{
        const request = await fetch(url)
        const data = await request.json()
        return data
    }catch(err){
        return err;
    }
}
export const updateCart = async(cart) => {
    
  let url = `http://localhost:4000/api/products/cart`;

  try{
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(cart)
    });
      const data = await request.json()
      return data
  }catch(err){
      return err;
  }
}
export const getCombos = async(productId) => {
  let query;
  if (productId) {
    query = `?productId=${productId}`;
  } else {
    query = "";
  }
  let url = `http://localhost:4000/api/combos/${query} `;

  try{
      const request = await fetch(url)
      const data = await request.json()
      return data
  }catch(err){
      return err;
  }
}