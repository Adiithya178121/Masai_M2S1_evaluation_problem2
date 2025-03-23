const createInventoryManager = () => {
  const products = [] ;
  return {
    addProduct(name, category, price, quantity) {
      products.push({name , category, price, quantity})
      return this;
    },
    updateProduct(name, newDetails) {
      const product = products.find(p => p.name === name);
          if(product) {
            Object.assign(product,newDetails);
          }
      return this;
    },
    getProducts() {
      return products;
    },
    get_filtered_procucts (category) {
      return products.filter(product => product.category === category);
    },
    get_low_stock_products () {
      return products.filter(product => product.quantity < 5);
    },
    get_total_inventoryvalue () {
    return products.reduce((total,product => total + product.price * product.quantity, 0);
    },
    sort_by_price () {
      return [...products].sort ((a,b) => a.price - b.price);
    },
    sort_by_stocklevel () {
      return [...products].sort((a,b) => b.quantity - a.quantity);
          }
    
  };
};

export default createInventoryManager;
