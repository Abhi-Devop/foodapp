import { Controller, Post, Get, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
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

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.createReservation(createReservationDto);
  }

  @Get()
  async getAvailability() {
    return this.reservationsService.getAvailability();
  }

  @Get('all')
  async getAllReservations() {
    return this.reservationsService.getAllReservations();
  }
}
