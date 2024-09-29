import ClubUserDashboardLayout from '@/slices/clubs/user-dashboard/components/layout/ClubUserDashboardLayout';
import UpcomingEvents from '@/slices/clubs/user-dashboard/components/UpcomingEvents';

export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout showTask>
      <UpcomingEvents />
    </ClubUserDashboardLayout>
  );
}
