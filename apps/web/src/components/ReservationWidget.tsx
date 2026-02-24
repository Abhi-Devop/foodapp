'use client';

import { useState } from 'react';
import { useReservationStore } from '@/store/useReservationStore';
import { Calendar, Clock, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { apiService } from '@/lib/api';

export default function ReservationWidget() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    isOpen,
    setIsOpen,
    selectedDate,
    timeSlot,
    guestCount,
    setDate,
    setTimeSlot,
    setGuestCount,
    resetReservation
  } = useReservationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !timeSlot) return;
    
    setIsSubmitting(true);
    try {
      await apiService.createReservation({
        customerName: 'Guest', // Hardcoded or ideally fetched from auth context
        email: 'guest@example.com',
        phone: '0000000000',
        date: new Date(selectedDate).toISOString(),
        timeSlot,
        guestCount,
      });

      setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
          resetReservation();
        }, 3000);
    } catch (error) {
      console.error('Reservation failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black/90 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out border border-white/10 translate-x-[75%] hover:translate-x-0 opacity-70 hover:opacity-100"
      >
        <Calendar className="w-5 h-5" />
        <span className="font-semibold tracking-wide">Book a Table</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:right-6 md:left-auto w-full md:w-[400px] bg-black/95 text-white backdrop-blur-xl border-t md:border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:rounded-2xl overflow-hidden transition-all animate-in slide-in-from-bottom-5">
      <div className="p-5 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-zinc-900 to-black">
        <div>
          <h3 className="text-xl font-bold font-playfair tracking-wide text-amber-500">Reserve Your Table</h3>
          <p className="text-zinc-400 text-sm mt-1">Experience culinary excellence</p>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      <div className="p-6">
        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
            <CheckCircle className="w-16 h-16 text-emerald-500" />
            <div>
              <h4 className="text-xl font-bold mb-2">Reservation Confirmed</h4>
              <p className="text-zinc-400 text-sm">We look forward to serving you!</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all [color-scheme:dark]"
                />
              </div>

              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <select
                    required
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none"
                  >
                    <option value="" disabled>Select Time</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>

                <div className="relative flex-1">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !selectedDate || !timeSlot}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 transform active:scale-[0.98]"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
