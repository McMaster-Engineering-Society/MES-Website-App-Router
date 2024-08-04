export type Booking = {
  id: number;
  name: string;
  clubId: number;
  day: number;
  month: number;
  year: number;
  startTime: string;
  endTime: string;
  building: string;
  room: string;
  status: 'approved' | 'pending' | 'rejected';
};
