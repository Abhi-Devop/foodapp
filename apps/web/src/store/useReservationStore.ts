import { create } from 'zustand';

interface ReservationState {
  selectedDate: string;
  timeSlot: string;
  guestCount: number;
  specialNotes: string;
  setDate: (date: string) => void;
  setTimeSlot: (timeSlot: string) => void;
  setGuestCount: (count: number) => void;
  setSpecialNotes: (notes: string) => void;
  resetReservation: () => void;
}

const initialState = {
  selectedDate: '',
  timeSlot: '',
  guestCount: 2,
  specialNotes: '',
};

export const useReservationStore = create<ReservationState>((set) => ({
  ...initialState,
  setDate: (date) => set({ selectedDate: date }),
  setTimeSlot: (timeSlot) => set({ timeSlot }),
  setGuestCount: (guestCount) => set({ guestCount }),
  setSpecialNotes: (specialNotes) => set({ specialNotes }),
  resetReservation: () => set(initialState),
}));
