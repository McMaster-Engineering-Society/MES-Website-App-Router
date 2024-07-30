import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

const UpcomingBookings = () => {
  return (
    <div>
      <h3>Upcoming Bookings</h3>
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
