import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(5, 10)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsPhoneNumber('MA')
  readonly phone: string;
  @IsString()
  readonly password: string;
}
