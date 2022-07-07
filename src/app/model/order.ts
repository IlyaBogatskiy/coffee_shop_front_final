import {OrderItem} from "./order-item";

export class Order {

  id?: number;

  orderDate?: Date;

  customerName?: string;

  deliveryAddress?: string;

  orderItems?: OrderItem[];

  orderPrice?: string;
}
