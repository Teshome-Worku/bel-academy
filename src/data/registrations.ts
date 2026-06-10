import type { Registration } from "@/types/registration";

export const registrations: Registration[] = [
  { id: "reg-101", fullName: "Kidus Fikadu", email: "kidus.f@email.com", phone: "0911002233", programId: "prog-3", branchId: "branch-buraayyuu", schedule: "weekend", submittedAt: "2026-06-08", status: "pending" },
  { id: "reg-102", fullName: "Selam Tadesse", email: "selam.t@email.com", phone: "0922003344", programId: "prog-1", branchId: "branch-jamoo", schedule: "morning", submittedAt: "2026-06-07", status: "pending" },
  { id: "reg-103", fullName: "Nati Girma", email: "nati.g@email.com", phone: "0933004455", programId: "prog-2", branchId: "branch-online", schedule: "evening", submittedAt: "2026-06-06", status: "approved" },
  { id: "reg-104", fullName: "Feven Assefa", email: "feven.a@email.com", phone: "0944005566", programId: "prog-5", branchId: "branch-buraayyuu", schedule: "morning", submittedAt: "2026-06-05", status: "pending" },
  { id: "reg-105", fullName: "Robel Haile", email: "robel.h@email.com", phone: "0955006677", programId: "prog-6", branchId: "branch-jamoo", schedule: "evening", submittedAt: "2026-06-04", status: "rejected" },
  { id: "reg-106", fullName: "Eden Mulatu", email: "eden.m@email.com", phone: "0966007788", programId: "prog-4", branchId: "branch-online", schedule: "afternoon", submittedAt: "2026-06-03", status: "approved" },
];
