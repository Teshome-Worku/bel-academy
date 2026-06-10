export type StudentStatus = "active" | "inactive" | "graduated";

export interface Student {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  branchId: string;
  enrolledAt: string;
  status: StudentStatus;
}
