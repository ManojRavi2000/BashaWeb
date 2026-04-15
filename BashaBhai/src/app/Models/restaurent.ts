import { Loginuser } from "./loginuser";

export class Restaurent {
     restaurantId!: number;

  restaurantName?: string;
  restaurantEMail?: string;
  mobileNumber?: string;
  restaurantPhoneNumber?: number;

  password?: string;
  confirmPassword?: string;

  restaurantType?: string;
  restaurantStreet?: string;
  restaurantCity?: string;
  tradeId?: string;
  restaurantPinCode?: string;
  restaurantLandMark?: string;
  restaurantDescreption?: string;

  dateCreated?: string;    // LocalDateTime → ISO string
  dateModified?: string;   // LocalDateTime → ISO string

  isDelete?: boolean;
  isActive?: boolean;
  isOnline?: boolean;
  isVerified?: boolean;

  otp?: string;

  startTime?: string;   // LocalTime → "HH:mm:ss"
  endTime?: string;

  shopFcmToken?: string;

  restaurantLat?: number;
  restaurantLng?: number;

  images!: ImageData[];

  login!: Loginuser;
}
