export type RegistrationStatus = "pending" | "approved" | "rejected";

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  branchId: string;
  schedule: string;
  message?: string;
  submittedAt: string;
  status: RegistrationStatus;
}
