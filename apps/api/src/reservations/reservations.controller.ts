import { Controller, Post, Get, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

export class CreateReservationDto {
  customerName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guestCount: number;
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
}
