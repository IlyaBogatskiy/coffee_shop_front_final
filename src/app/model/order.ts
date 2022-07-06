import {OrderItem} from "./order-item";

export class Order {

  id: number | undefined;

  orderDate: Date | undefined;

  customerName: string | undefined;

  deliveryAddress: string | undefined;

  orderItems: OrderItem[] | undefined;

  orderPrice: string | undefined;
}
