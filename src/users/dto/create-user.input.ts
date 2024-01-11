import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  MaxLength, // Added for phone validation
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  const phoneRegEx = 
  /^(0\d{8}|05\d{8})$/;

  const emailRegEx = 
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?: \.[a-zA-Z0-9-]+)*$/;

@InputType()
export class CreateUserInput {
  @Matches(emailRegEx, {
    message: 'Invalid email format',
  })
  @Field()
  email: string;

  @Matches(passwordRegEx, { message: 'Password is not strong enough' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Field()
  password: string;

  @IsString()
  @MinLength(4, { message: 'Name must be at least 4 letters long.' })
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @Matches(phoneRegEx, { message: 'Invalid phone number format' })
  @Field()
  phone: string;
  

  @IsNotEmpty()
  @Field()
  active: boolean;

  @IsBoolean()
  @Field()
  manager: boolean;
}
