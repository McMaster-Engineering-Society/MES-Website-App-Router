import EventsApproval from '@/components/clubs-portal/EventsApproval';
import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout pageName='Events Room Approval'>
      <EventsApproval />
    </ClubUserDashboardLayout>
  );
}
