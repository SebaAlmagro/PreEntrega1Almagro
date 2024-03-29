class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    product.code = 'P' + this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find((p) => p.code === productId);

    if (product) {
      return product;
    } else {
      console.error('Not found');
      return null;
    }
  }
}

const manager = new ProductManager();

const product1 = {
  title: 'AMD Radeon RX 580',
  description: 'Tarjeta grafica AMD Radeon RX 580',
  price: 550000,
  thumbnail: 'GamingHouse/Graficas/AMDRadeonRX580.jpg',
  stock: 7,
};

const product2 = {
  title: 'Geforce Rtx 3060 8gb',
  description: 'Tarjeta grafica Geforce Rtx 3060 8gb',
  price: 39.99,
  thumbnail: 'GamingHouse/Graficas/GeforceRtx30608gb.jpg',
  stock: 9,
};

manager.addProduct(product1);
manager.addProduct(product2);

console.log(manager.getProducts());

const foundProduct = manager.getProductById('P1');
console.log(foundProduct);

const notFoundProduct = manager.getProductById('P3');

  
