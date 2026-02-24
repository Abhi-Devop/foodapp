import { create } from 'zustand';

interface ReservationState {
  isOpen: boolean;
  selectedDate: string;
  timeSlot: string;
  guestCount: number;
  specialNotes: string;
  setIsOpen: (isOpen: boolean) => void;
  setDate: (date: string) => void;
  setTimeSlot: (timeSlot: string) => void;
  setGuestCount: (count: number) => void;
  setSpecialNotes: (notes: string) => void;
  resetReservation: () => void;
}

const initialState = {
  isOpen: false,
  selectedDate: '',
  timeSlot: '',
  guestCount: 2,
  specialNotes: '',
};

export const useReservationStore = create<ReservationState>((set) => ({
  ...initialState,
  setIsOpen: (isOpen) => set({ isOpen }),
  setDate: (date) => set({ selectedDate: date }),
  setTimeSlot: (timeSlot) => set({ timeSlot }),
  setGuestCount: (guestCount) => set({ guestCount }),
  setSpecialNotes: (specialNotes) => set({ specialNotes }),
  resetReservation: () => set(initialState),
}));
