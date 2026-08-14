export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  experienceYears: number;
  specialization: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "B.T. Naik",
    qualification: "FCA, DISA (ICAI)",
    experienceYears: 25,
    specialization: "Direct Taxation & Auditing"
  },
  {
    id: "2",
    name: "S. Patel",
    qualification: "FCA, CS",
    experienceYears: 18,
    specialization: "Company Law & Indirect Tax"
  },
  {
    id: "3",
    name: "R. Sharma",
    qualification: "ACA",
    experienceYears: 8,
    specialization: "International Taxation & FEMA"
  }
];
