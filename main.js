import createInventoryManager from './inventoryManager.js';
javascript
CopyEdit
const inventory = createInventoryManager();
inventory.addProduct("Laptop", "Electronics", 1200, 10);
inventory.addProduct("Phone", "Electronics", 800, 3);
inventory.addProduct("Chair", "Furniture", 100, 15);

console.log(inventory.getProducts());
console.log(inventory.get_filtered_Products("Electronics"));
console.log(inventory.get_low_stock_Products());
console.log(inventory.get_total_inventoryValue());
console.log(inventory.sort_by_price());
console.log(inventory.sort_by_stocklevel());




const inventory = createInventoryManager();
inventory.addProduct("Table", "Furniture", 250, 2);
inventory.addProduct("Mouse", "Electronics", 40, 20);
inventory.addProduct("Keyboard", "Electronics", 60, 5);

console.log(inventory.getProducts());
console.log(inventory.get_filtered_Products("Furniture"));
console.log(inventory.get_low_stock_Products());
console.log(inventory.get_total_inventoryValue());
console.log(inventory.sort_by_price());
console.log(inventory.sort_by_stocklevel());


