import { IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  customerName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  date: string;

  @IsString()
  timeSlot: string;

  @IsNumber()
  guestCount: number;

  @IsOptional()
  @IsString()
  specialRequests?: string;
}
