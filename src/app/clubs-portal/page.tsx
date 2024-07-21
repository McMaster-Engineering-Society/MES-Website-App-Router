import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

const UpcomingBookings = () => {
  return (
    <div>
      <h1>Upcoming Bookings</h1>
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
