export class SignUpRequestCommand {
    Email: string;
    Password: string;
}

export class SendOtpVerificationRequestCommand {
    Token: string;
    Email: string;
    Password: string;
}

export class AdditionalFieldsRequestCommand{
    Name: string;
    Surname: string;
    BirthDate: Date;
    Email: string;
}