export type Appointment = {
  name: string;
  subtitle: string;
  pronouns: string;
  src?: string;
  email?: string;
  office?: string;
  cell?: string;
  meetingNote?: string;
  virtualDays?: number[];
};

export type TimeSlot = {
  hour: number;
  minute: number;
};
