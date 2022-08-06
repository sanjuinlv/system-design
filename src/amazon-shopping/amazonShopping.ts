/* 
Actors:
Guest - Can search
Customer - Search, add/edit/delete items to cart, checkout, pay
Seller - add product
Administrator -  Add product catalog
Notifications - Send notification

*/

class Customer {
  private shoppingCart: ShoppingCart;
  private searchService: SearchService;

  //operations
  getShoppingCart(customerId: string): ShoppingCart {
    return null;
  }
  addItemToShoppingCart(item: Item): void {}
  updateItemToShoppingCart(item: Item): void {}
  removeItemFromShoppingCart(item: Item): void {}
}

class Guest extends Customer {
  registerAccount(): Account {
    return null;
  }
}

class Member extends Customer {
  placeOrder(cart: ShoppingCart): OrderStatus {
    return null;
  }
  addReview(review: ProductReview): void {}
}

class Seller extends Customer {
  addProduct(product: Product): void {}
}

class Account {
  private name: string;
  private email: string;
  private phoneNumber: string;
  private userName: string;

  private shippingAddress: Array<Address>;
  private accountStatus: AccountStatus;
}

class Address {
  private street: string;
  private city: string;
  private state: string;
  private country: string;
  private pinCode: string;
}

enum AccountStatus {
  ACTIVE,
  BLOCKED,
  INACTIVE,
}

class ShoppingCart {
  private item: Array<Item>;
  private cartValue: number;

  addItem(item: Item): void {}
  updateItem(item: Item): void {}
  removeItem(item: Item): void {}
  getItems(): Array<Item> {
    return [];
  }
  checkoutItems(): void {}
  getCartValue(): number {
    return 0;
  }
}

class Item {
  private product: Product;
  private qty: number;
}

class Product {
  private productId: number;
  private name: string;
  private description: string;
  private productCategory: ProductCategory;
  private seller: Seller;
  private cost: number;
  private reviews: Array<ProductReview>;
}

//should we create enum as we might need to update the product category with new entry
enum ProductCategory {
  MOBILE,
  ELECTRONICS,
  GROCERY,
  FURNITURE,
}

class ProductReview {
  private details: string;
  private buyer: Member;
  private rating: number;
}

class SearchService {
  searchByName(): Array<Product> {
    return [];
  }
  searchByCategory(): Array<Product> {
    return [];
  }
}

class Order {
  private orderId: number;
  private orderItem: Array<Item>;
  private orderValue: number;
  private buyer: Member;
  private orderDate: Date;
  private orderLog: Array<OrderLog>;
}

class OrderLog {
  private orderDetail: string;
  private orderStatus: OrderStatus;
  private createdDate: Date;
  private event: string; //can be a entity to capture the event
}

class OrderService {
  private notificationService: NotificationService;
  placeOrder(order: Order): OrderStatus {
    return null;
  }
  trackOrder(orderId: number): OrderStatus {
    return null;
  }
  addOrderLog(ordrLog: OrderLog): void {}
  makePayment(paymentTyep: PaymentType): PaymentStatus {
    return null;
  }
}

enum OrderStatus {
  PACKED,
  SHIPPED,
  ENROUTE,
  OUT_FOR_DELIVERY,
  DELIVERED,
  CANCELLED,
}

enum PaymentStatus {
  SUCCESS,
  ERROR,
  PENDING,
  CANCELLED,
  REFUND_INITIATED,
  REFUNDED,
}

enum PaymentType {
  CREDIT_CARD,
  DEBIT_CARD,
  NET_BANKING,
  UPI,
}

class ShipmentLog {
  private shipmentNumber: number;
  private shipmentStatus: ShipmentStatus;
  private creationDate: Date;
}

enum ShipmentStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  ON_HOLD,
}

class Shipment {
  private shipmentId: number;
  private shipmentDate: Date;
  private estimatedArrival: Date;
  private shipmentMethod: string;
  private shipmentLog: Array<ShipmentLog>;
  //order id reference
  private order: Order;
}

class NotificationService {
  private notification: Notification;
  //calling class (Order in this case) passes the notification type and message to be sent
  sendNotification(notification: Notification, message: Message): void {
    notification.sendNotification(message);
  }
}

interface Notification {
  sendNotification(message: Message): void;
}

class EmailNotification implements Notification {
  sendNotification(message: Message): void {}
}

class SMSNotification implements Notification {
  sendNotification(message: Message): void {}
}

class WhatsAppNotification implements Notification {
  sendNotification(message: Message): void {}
}

class Message {
  private to: string;
  private from: string;
  private message: string;
}
