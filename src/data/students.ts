import type { Student } from "@/types/student";

const baseStudents: Omit<Student, "id">[] = [
  { fullName: "Abel Bekele", email: "abel.b@email.com", phone: "0911223344", programId: "prog-1", branchId: "branch-buraayyuu", enrolledAt: "2025-09-01", status: "active" },
  { fullName: "Sara Hailu", email: "sara.h@email.com", phone: "0922334455", programId: "prog-3", branchId: "branch-jamoo", enrolledAt: "2025-08-15", status: "active" },
  { fullName: "Daniel Tesfaye", email: "daniel.t@email.com", phone: "0933445566", programId: "prog-2", branchId: "branch-online", enrolledAt: "2025-07-20", status: "active" },
  { fullName: "Liya Gebre", email: "liya.g@email.com", phone: "0944556677", programId: "prog-5", branchId: "branch-buraayyuu", enrolledAt: "2025-06-10", status: "active" },
  { fullName: "Yonas Alemu", email: "yonas.a@email.com", phone: "0955667788", programId: "prog-4", branchId: "branch-jamoo", enrolledAt: "2025-05-01", status: "graduated" },
  { fullName: "Mekdes Worku", email: "mekdes.w@email.com", phone: "0966778899", programId: "prog-6", branchId: "branch-online", enrolledAt: "2025-10-01", status: "active" },
  { fullName: "Biniam Negash", email: "biniam.n@email.com", phone: "0977889900", programId: "prog-7", branchId: "branch-buraayyuu", enrolledAt: "2024-12-01", status: "inactive" },
  { fullName: "Rahel Demissie", email: "rahel.d@email.com", phone: "0988990011", programId: "prog-1", branchId: "branch-jamoo", enrolledAt: "2025-11-01", status: "active" },
  { fullName: "Hanna Solomon", email: "hanna.s@email.com", phone: "0910112233", programId: "prog-7", branchId: "branch-online", enrolledAt: "2025-04-12", status: "active" },
  { fullName: "Tewodros Girma", email: "tewodros.g@email.com", phone: "0921223344", programId: "prog-2", branchId: "branch-buraayyuu", enrolledAt: "2025-03-08", status: "active" },
  { fullName: "Bethel Assefa", email: "bethel.a@email.com", phone: "0932334455", programId: "prog-3", branchId: "branch-jamoo", enrolledAt: "2025-02-20", status: "graduated" },
  { fullName: "Samuel Kebede", email: "samuel.k@email.com", phone: "0943445566", programId: "prog-4", branchId: "branch-online", enrolledAt: "2025-01-15", status: "active" },
  { fullName: "Marta Tadesse", email: "marta.t@email.com", phone: "0954556677", programId: "prog-5", branchId: "branch-buraayyuu", enrolledAt: "2024-11-30", status: "inactive" },
  { fullName: "Elias Fikadu", email: "elias.f@email.com", phone: "0965667788", programId: "prog-6", branchId: "branch-jamoo", enrolledAt: "2024-10-05", status: "active" },
  { fullName: "Selamawit Haile", email: "selamawit.h@email.com", phone: "0976778899", programId: "prog-1", branchId: "branch-online", enrolledAt: "2024-09-18", status: "active" },
];

export const students: Student[] = baseStudents.map((s, i) => ({
  ...s,
  id: `stu-${String(i + 1).padStart(3, "0")}`,
}));
