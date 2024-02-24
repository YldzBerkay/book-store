export class SignUpRequestCommand {
    email: string;
    password: string;
}

export class SendOtpVerificationRequestCommand {
    email: string;
    password: string;
    otp: string;
}

export class AdditionalFieldsRequestCommand{
    name: string;
    surname: string;
    birthDate: Date;
    email: string;
}