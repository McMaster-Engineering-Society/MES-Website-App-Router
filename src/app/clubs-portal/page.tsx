import UpcomingEvents from '@/components/clubs-portal/UpcomingEvents';
import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout showTask>
      <UpcomingEvents />
    </ClubUserDashboardLayout>
  );
}
