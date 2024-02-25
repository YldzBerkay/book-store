import { Otp } from "./otp";
import { RefreshToken } from "./refresh-token";

export class User{
    Id: string;
    Email: string;
    Name: string;
    Surname: string;
    IsRegistrationCompleted : boolean;
    BirthDate: Date;
}