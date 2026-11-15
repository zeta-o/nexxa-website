import { create } from "zustand";

import type { DivisionName, GalleryAlbum, StaffGroup } from "@/lib/data";

export type CalendarView = "proximos" | "resultados";

type FiltersState = {
  calendarDivision: DivisionName | "Todas";
  calendarView: CalendarView;
  staffGroup: StaffGroup | "Todas";
  galleryAlbum: GalleryAlbum | "Todas";
  setCalendarDivision: (d: FiltersState["calendarDivision"]) => void;
  setCalendarView: (v: CalendarView) => void;
  setStaffGroup: (g: FiltersState["staffGroup"]) => void;
  setGalleryAlbum: (a: FiltersState["galleryAlbum"]) => void;
};

/** UI filters shared across the calendar, staff and gallery pages. */
export const useFiltersStore = create<FiltersState>()((set) => ({
  calendarDivision: "Todas",
  calendarView: "proximos",
  staffGroup: "Todas",
  galleryAlbum: "Todas",
  setCalendarDivision: (calendarDivision) => set({ calendarDivision }),
  setCalendarView: (calendarView) => set({ calendarView }),
  setStaffGroup: (staffGroup) => set({ staffGroup }),
  setGalleryAlbum: (galleryAlbum) => set({ galleryAlbum }),
}));
