import ClubEvent from '@/components/clubs-portal/ClubEvent';
import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

import { Booking } from '@/types/booking';

const UpcomingBookings = () => {
  const bookings = [
    {
      id: 1,
      name: "Club's Event",
      clubId: 1,
      day: 30,
      month: 3,
      year: 2022,
      startTime: '12:00',
      endTime: '14:00',
      building: 'Building 1',
      room: 'Room 1',
      status: 'approved' as Booking['status'],
    },
    {
      id: 2,
      name: "Club's Event",
      clubId: 1,
      day: 1,
      month: 1,
      year: 2022,
      startTime: '12:00',
      endTime: '14:00',
      building: 'Building 1',
      room: 'Room 1',
      status: 'rejected' as Booking['status'],
    },
    {
      id: 3,
      name: "Club's Event",
      clubId: 1,
      day: 1,
      month: 1,
      year: 2022,
      startTime: '12:00',
      endTime: '14:00',
      building: 'Building 1',
      room: 'Room 1',
      status: 'pending' as Booking['status'],
    },
  ];

  return (
    <div className='w-full'>
      <h3>Upcoming Bookings</h3>
      <div className='w-full'>
        <ClubEvent booking={bookings[0]} />
        <ClubEvent booking={bookings[1]} />
        <ClubEvent booking={bookings[2]} />
      </div>
    </div>
  );
};

export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout>
      <UpcomingBookings />
    </ClubUserDashboardLayout>
  );
}
