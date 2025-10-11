export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imagePath: string;
  description: string;
  price?: number;
}

export interface Ticket {
  id: string;
  eventId: string;
  eventName: string;
  userName: string;
  ticketNumber: string;
  purchaseDate: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'ewallet' | 'bank';
}