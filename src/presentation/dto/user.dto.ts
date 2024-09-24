import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
  IsEnum,
  IsAlpha,
} from 'class-validator';
import { EPermissions } from 'src/shared/enums';

export class UserDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(40)
  @IsAlpha()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/, {
    message: 'password too weak',
  })
  password: string;

  @IsNotEmpty()
  @IsEnum(Permissions, { each: true })
  permissions: EPermissions[];
}
