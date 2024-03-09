import { AuthToken } from "../auth/auth-token";
import { User } from "../auth/user";

export class SignUpRequestCommand {
    Email: string;
    Password: string;
}

export class SendOtpVerificationRequestCommand {
    Token: string;
    Email: string;
    Password: string;
    Role: string;
}

export class AdditionalFieldsRequestCommand {
    Name: string;
    Surname: string;
    BirthDate: Date;
    Email: string;
}

export class SignInRequestCommand {
    Email: string;
    Password: string;
}

export class SignInResponse {
    User: User;
    AuthToken: AuthToken;
    RefreshToken: string;
}

export class RefreshTokenRequestCommand {
    UserId: string;
    RefreshToken: string;
}

export class ForgotPasswordRequestCommand {
    Email: string;
}

export class ResetPasswordRequestCommand {
    PasswordResetToken: string;
    Password: string;
    PasswordConfirm: string;
}