import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './reservations.controller';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  async createReservation(data: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: {
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        date: new Date(data.date),
        timeSlot: data.timeSlot,
        guestCount: data.guestCount,
        specialRequests: data.specialRequests,
        status: 'CONFIRMED', // Set to confirmed by default or pending
      },
    });
  }

  async getAvailability() {
    // Basic implementation: return dummy availability or fetch from DB
    return {
      available: true,
      message: 'Reservations are open.',
    };
  }
}
