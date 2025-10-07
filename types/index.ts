export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Music' | 'Texts' | 'Education';
  description?: string;
  price: string;
}

export interface User {
  fullName: string;
  email: string;
  password: string;
}

export interface PaymentDetails {
  bankName: string;
  accountNumber: string;
  amount: string;
}

export interface Ticket {
  eventName: string;
  userName: string;
  ticketNumber: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
}