import { IsNotEmpty, IsString, IsEmail, Length, IsBoolean, IsEnum } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;

  @IsString()
  public hashedRT: string;

  @IsEnum(['GOOGLE', 'PASSWORD'])
  public authType: [string];

  @IsBoolean()
  public isVerified: boolean;
}
