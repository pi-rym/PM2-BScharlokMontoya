const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
  let carritoCompra;

  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });
  describe("Sobre el constructor de la clase CarritoCompra", () => {
    it("CarritoCompra deberia ser una clase", () => {
      expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });
    it("carritoCompra deberia ser una instancia de la clase CarritoCompra", () => {
      expect(carritoCompra instanceof CarritoCompra).toBe(true);
    });
    it("Deberia guardar los productos en una lista", () => {
      expect(carritoCompra.products).toEqual([]);
    });
  });
  describe("Metodos de la lase CarritoCompra", () => {
    const product1 = {
      id: 1,
      name: "Lapicero Azul",
      price: 1500,
      quantity: 3,
    };
    const product2 = {
      id: 2,
      name: "Lapicero Negro",
      price: 1100,
      quantity: 8,
    };

    it("Deberia tener un metodo llamado agregarProducto", () => {
      expect(typeof carritoCompra.agregarProducto).toBe("function");
    });
    it("Deberia tener un metodo llamado calcularTotal", () => {
      expect(typeof carritoCompra.calcularTotal).toBe("function");
    });
    it("Deberia tener un metodo llamado aplicarDescuento", () => {
      expect(typeof carritoCompra.aplicarDescuento).toBe("function");
    });
    it("El metodo agregarProducto deberia poder agregar un producto a la lista", () => {
      carritoCompra.agregarProducto(product1);
      expect(carritoCompra.products).toContain(product1);
    });
    it("El metodo calcularTotal deberia poder calcular total de la compra sumando los precios de todos los productos en el carrito", () => {
      carritoCompra.agregarProducto(product1);
      carritoCompra.agregarProducto(product2);

      const totalExpect =
        product1.price * product1.quantity + product2.price * product2.quantity;

      const total = carritoCompra.calcularTotal();

      expect(total).toBe(totalExpect);
    });
    it("El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra", () => {
      carritoCompra.agregarProducto(product1);
      carritoCompra.agregarProducto(product2);
      const subTotal =
        product1.price * product1.quantity + product2.price * product2.quantity;

      const porcentajeDescuento = 10;
      const totalExpect = subTotal - (subTotal * porcentajeDescuento) / 100;
      const total = carritoCompra.aplicarDescuento(porcentajeDescuento);
      expect(totalExpect).toBe(total);
    });
  });
});
