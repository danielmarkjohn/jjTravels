export interface Vehicle {
  id: string;
  name: string;
  image: string;
  startingPrice: number;
  capacity: number;
  features: string[];
  category: 'economy' | 'premium' | 'luxury' | 'suv';
}

export interface BookingFormData {
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  vehicleType: string;
}

export interface NavItem {
  label: string;
  href: string;
}