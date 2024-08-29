'use client';
import { MessageCircleWarningIcon } from 'lucide-react';
import { MailIcon } from 'lucide-react';
import { NotebookPenIcon } from 'lucide-react';
import { ChevronLeftIcon } from 'lucide-react';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import ActionCard from '@/components/user-dashboard/ActionCard';
import DashboardIconSvg from '@/components/user-dashboard/DashboardIconSvg';
import NextBooking from '@/components/user-dashboard/NextBooking';
import UpcomingBookings from '@/components/user-dashboard/UpcomingBookings';
import UserInfo from '@/components/user-dashboard/UserInfo';

const UserDashboard = () => {
  return (
    <PageLayout noBackground>
      <main className='layout'>
        <section className='flex flex-col gap-10'>
          <div className='space-y-9'>
            <ButtonLink
              href='/hatch-booking'
              className='drop-shadow-2xl rounded-full bg-red-50 text-primary-700 transition-colors duration-75 pr-4'
              size='sm'
              leftIcon={ChevronLeftIcon}
            >
              Booking Page
            </ButtonLink>
            <div className='flex justify-start gap-8'>
              <DashboardIconSvg />
              <span className='hidden text-5xl font-bold md:block'>
                Welcome to your Dashboard!
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-10 sm:grid sm:grid-cols-3'>
            <ActionCard
              description={
                <>
                  Report an <strong>issue</strong>:
                </>
              }
              button={
                <ButtonLink
                  href='https://docs.google.com/forms/d/e/1FAIpQLSfCu5qtc2_HmYWJfM7aYtO0jcDEoB6rAt9VXJx-Op0k_Gc-kQ/viewform'
                  target='_blank'
                  className='drop-shadow-2xl rounded-full bg-red-50 text-primary-700 transition-colors duration-75 cursor-pointer'
                  size='sm'
                  leftIcon={MessageCircleWarningIcon}
                >
                  Report Issue
                </ButtonLink>
              }
            />
            <ActionCard
              description={
                <div className='text-nowrap'>
                  Email the <strong>hatch coordinator</strong>:
                </div>
              }
              button={
                <ButtonLink
                  href='mailto:ghc@mcmaster.ca'
                  target='_blank'
                  className='drop-shadow-2xl rounded-full bg-red-50 text-primary-700 transition-colors duration-75 text-nowrap cursor-pointer'
                  leftIcon={MailIcon}
                  size='sm'
                >
                  Email
                </ButtonLink>
              }
            />
            <ActionCard
              description={
                <>
                  <strong>Rebook</strong> your <br /> next booking:
                </>
              }
              button={
                <ButtonLink
                  href='https://mcmaster.tutorocean.com/search'
                  target='_blank'
                  className='drop-shadow-2xl rounded-full bg-red-50 text-primary-700 transition-colors duration-75 cursor-pointer'
                  leftIcon={NotebookPenIcon}
                  size='sm'
                >
                  Rebook booking
                </ButtonLink>
              }
            />
          </div>

          <div className='grid grid-cols-2 gap-20'>
            <UserInfo />
            <div>
              <NextBooking />
              <UpcomingBookings />
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default UserDashboard;
