import cds from '@sap/cds'

export class CoffeeShopService extends cds.ApplicationService {
  init() {

    const { Orders, OrderItems } = cds.entities('CoffeeShopService')


    this.after('READ', Orders, async (orders, req) => {
      const day = new Date().getDay();
      let discount = 0;
      if (day >= 1 && day <= 3) discount = 10;
      else if (day == 4 || day == 5) discount = 5;
      else discount = -5;

      for (const order of orders) {
        order.discount = discount;
        order.discountAmount = Number((order.totalAmount) * discount / 100).toFixed(2);
      }
    })


    return super.init()
  }
}
