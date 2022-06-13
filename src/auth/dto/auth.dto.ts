import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    gender?: string;
    @IsString()
    @IsNotEmpty()
    password: string; 
}