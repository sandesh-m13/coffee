using {exam.coffeeshop as db} from '../db/schema';

@path: '/coffee'
service CoffeeShopService {
    entity Orders     as projection on db.Orders;
    entity OrderItems as projection on db.OrderItems;
}
