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
  public getShoppingCart(customerId: string): ShoppingCart {
    return null;
  }
  public addItemToShoppingCart(item: Item): void {}
  public updateItemToShoppingCart(item: Item): void {}
  public removeItemFromShoppingCart(item: Item): void {}
}

class Guest extends Customer {
  public registerAccount(): Account {
    return null;
  }
}

class Member extends Customer {
  public placeOrder(cart: ShoppingCart): OrderStatus {
    return null;
  }
  public addReview(review: ProductReview): void {}
}

class Seller extends Customer {
  public addProduct(product: Product): void {}
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

  public addItem(item: Item): void {}
  public updateItem(item: Item): void {}
  public removeItem(item: Item): void {}
  public getItems(): Array<Item> {
    return [];
  }
  public checkoutItems(): void {}
  public getCartValue(): number {
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
  public searchByName(): Array<Product> {
    return [];
  }
  public searchByCategory(): Array<Product> {
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
  public placeOrder(order: Order): OrderStatus {
    return null;
  }
  public trackOrder(orderId: number): OrderStatus {
    return null;
  }
  public addOrderLog(ordrLog: OrderLog): void {}
  //this should call to Payment Service
  public makePayment(paymentTyep: PaymentType): PaymentStatus {
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
  public sendNotification(notification: Notification, message: Message): void {
    notification.sendNotification(message);
  }
}

interface Notification {
  sendNotification(message: Message): void;
}

class EmailNotification implements Notification {
  public sendNotification(message: Message): void {}
}

class SMSNotification implements Notification {
  public sendNotification(message: Message): void {}
}

class WhatsAppNotification implements Notification {
  public sendNotification(message: Message): void {}
}

class Message {
  private to: string;
  private from: string;
  private message: string;
}

export {};
