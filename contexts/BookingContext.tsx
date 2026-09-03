"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingContextValue {
  openModal: () => void;
}

const BookingContext = createContext<BookingContextValue>({ openModal: () => {} });

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
