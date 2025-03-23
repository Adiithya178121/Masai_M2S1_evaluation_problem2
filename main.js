import createInventoryManager from './inventoryManager.js';
javascript
CopyEdit
const inventory = createInventoryManager();
inventory.addProduct("Laptop", "Electronics", 1200, 10);
inventory.addProduct("Phone", "Electronics", 800, 3);
inventory.addProduct("Chair", "Furniture", 100, 15);

console.log(inventory.getProducts());
console.log(inventory.getFilteredProducts("Electronics"));
console.log(inventory.getLowStockProducts());
console.log(inventory.getTotalInventoryValue());

