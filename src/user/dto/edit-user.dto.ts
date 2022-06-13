import {
    IsEmail,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditUserDto {
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @IsString()
    @IsOptional()
    gender?: string;
  
    @IsString()
    @IsOptional()
    name?: string;
  }