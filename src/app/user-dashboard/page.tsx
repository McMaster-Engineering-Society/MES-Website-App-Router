'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { format } from 'date-fns';
import {
  CalendarClockIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ClockIcon,
  LayoutPanelLeft,
  MailIcon,
  MessageCircleWarningIcon,
  UserRoundCogIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { TBooking } from '@/lib/types';
import { cn } from '@/lib/utils';

import { BookingTimeslot } from '@/components/bookings/BookingTimeslot';
import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import RebookModal from '@/components/modals/RebookModal';
import PageSection from '@/components/PageSection';
import DashboardIconSvg from '@/components/user-dashboard/DashboardIconSvg';
import ProfilePicture from '@/components/user-dashboard/ProfilePictureSvg';

import { TUser } from '@/app/api/types';

const queryClient = new QueryClient();

// todo: add routing protection, only logged in users should be able to access this page
const UserDashboard = () => {
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState<TUser | null>(null);
  const [nextBookingsData, setNextBookingsData] = useState<TBooking[]>([]);
  const [pastBookingsData, setPastBookingsData] = useState<TBooking[]>([]);
  const [nextBooking, setNextBooking] = useState<TBooking | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const [displayStartTime, setDisplayStartTime] = useState<Date>(new Date());
  const [displayEndTime, setDisplayEndTime] = useState<Date>(new Date());
  const [displayRoom, setDisplayRoom] = useState<string>('');

  // todo: ask if we should we only display a set number of past bookings and upcoming bookings? e.g: only show 5 of the past bookings, or have some sort of filtering / pagination in the future?

  const fetchUserInfo = async (userId: string) => {
    const response = await fetch(`/api/users/get-user?userId=${userId}`, {
      method: 'GET',
    });
    const jsonResponse = await response.json();
    setUserData({
      _id: jsonResponse.data._id,
      firstName: jsonResponse.data.firstName,
      lastName: jsonResponse.data.lastName,
      email: jsonResponse.data.email,
      hatchNumber: jsonResponse.data.hatchNumber,
    });
  };

  const fetchPastBookingsByEmail = async (email: string) => {
    // To get the past bookings, use the range where start date is a year before today's date and end date is today
    const startDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1),
    );
    const endDate = new Date();

    const startDateISO = startDate.toISOString().slice(0, -1);
    const endDateISO = endDate.toISOString().slice(0, -1);
    // todo: update this route after aidan's pr gets merged, right now not filtering by email
    // todo: looks like the response from the api is not sorted by date, double check with aidan
    const response = await fetch(
      `/api/bookings/get-bookings-in-date-range?startdate=${startDateISO}&enddate=${endDateISO}&email=${email}`,
      {
        method: 'GET',
      },
    );
    const jsonResponse = await response.json();

    setPastBookingsData(() => {
      const newPastBookings: TBooking[] = jsonResponse.data.map(
        (booking: TBooking) => ({
          _id: booking._id,
          userId: booking.userId,
          room: booking.room,
          email: booking.email,
          startTime: booking.startTime,
          endTime: booking.endTime,
          hasConfirmed: booking.hasConfirmed,
          createdDate: booking.createdDate,
        }),
      );

      return newPastBookings;
    });
  };

  const fetchNextBookingsByEmail = async (email: string) => {
    // To get the upcoming bookings, use the range where start date is today and end date is a year from now
    const startDate = new Date();
    const endDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1),
    );
    const startDateISO = startDate.toISOString().slice(0, -1);
    const endDateISO = endDate.toISOString().slice(0, -1);
    // todo: update this route after aidan's pr gets merged, right now not filtering by email
    // todo: looks like the response from the api is not sorted by date, double check with aidan
    const response = await fetch(
      `/api/bookings/get-bookings-in-date-range?startdate=${startDateISO}&enddate=${endDateISO}&email=${email}`,
      {
        method: 'GET',
      },
    );
    const jsonResponse = await response.json();

    // todo: looks like the response from the api is not sorted by date, double check with aidan, update this accordingly
    setNextBooking(jsonResponse.data.shift());

    setNextBookingsData((oldNextBookingsData) => {
      const newBookings: TBooking[] = jsonResponse.data.map(
        (booking: TBooking) => ({
          _id: booking._id,
          userId: booking.userId,
          room: booking.room,
          email: booking.email,
          startTime: booking.startTime,
          endTime: booking.endTime,
          hasConfirmed: booking.hasConfirmed,
          createdDate: booking.createdDate,
        }),
      );

      return [...oldNextBookingsData, ...newBookings];
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      // const sessionUser = await getSessionUser();
      // sessionUser?.id ? setUserId(sessionUser.id) : null;
      // sessionUser?.email? setUserEmail(sessionUser.email) : null;

      // hard coded for testing purposes:
      setUserEmail('ann@email.com');
      setUserId('66c3caf909e523e22135eb21');
    };

    fetchUser();
  }, []);

  useEffect(() => {
    userId ? fetchUserInfo(userId) : null;
    userEmail ? fetchNextBookingsByEmail(userEmail) : null;
    userEmail ? fetchPastBookingsByEmail(userEmail) : null;
  }, [userId, userEmail]);

  function handleExpand(startTime: Date, endTime: Date, room: string) {
    setOpen(true);
    setDisplayStartTime(startTime);
    setDisplayEndTime(endTime);
    setDisplayRoom(room);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout noBackground>
        <main className='layout'>
          <section className='flex flex-col  gap-10 '>
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

            <div className='grid grid-cols-2 gap-20'>
              <div>
                <PageSection
                  heading='Account Information'
                  variant='white'
                  headingClassName='bg-[#988ED7] capitalize'
                  leftIcon={UserRoundCogIcon}
                  className='rounded-lg max-h-[350px]'
                >
                  {userData && (
                    <div className='flex flex-row items-center justify-center gap-6 min-h-[75px]'>
                      <ProfilePicture />
                      <div className='flex flex-col'>
                        <div className='flex flex-row place-items-center space-x-2'>
                          <p className='text-2xl font-bold'>
                            {userData.firstName} {userData.lastName}
                          </p>
                          <p className='text-gray-500 font-light'>
                            {userData.hatchNumber &&
                              'hatch ' + userData.hatchNumber}
                          </p>
                        </div>
                        <p className='text-gray-500 font-light underline'>
                          {userData.email}
                        </p>
                        {/* todo: add account edit button, right now we don't have an update user endpoint or screen*/}
                      </div>
                    </div>
                  )}
                </PageSection>

                <PageSection
                  heading='Past Bookings'
                  variant='white'
                  headingClassName='bg-slate-400 capitalize'
                  leftIcon={CalendarDaysIcon}
                  className='rounded-lg'
                >
                  {pastBookingsData.length > 0 ? (
                    <div className='flex flex-col gap-8 min-h-[75px]'>
                      {pastBookingsData.map((booking) => {
                        return (
                          <BookingTimeslot
                            key={booking._id}
                            startTime={booking.startTime}
                            endTime={booking.endTime}
                            room={booking.room}
                            handleExpand={handleExpand}
                            variant='previous'
                          ></BookingTimeslot>
                        );
                      })}
                    </div>
                  ) : (
                    <div className='flex flex-row items-center justify-center min-h-[75px]'>
                      <p>You do not have any past bookings.</p>
                    </div>
                  )}
                </PageSection>
              </div>
              <div>
                <PageSection
                  heading='Your Next Booking'
                  variant='white'
                  headingClassName='bg-[#A1D884] capitalize'
                  leftIcon={CalendarClockIcon}
                  className='rounded-lg'
                >
                  {nextBooking ? (
                    <div className='flex flex-col sm:grid sm:grid-cols-2 justify-center items-center min-h-[75px]'>
                      <div className='flex flex-row items-center justify-center bg-[#CAFFB1] max-h-[24px] max-w-[200px] border-1 border-[#81BD71] rounded-xl px-8 py-4'>
                        <span className='text-nowrap'>
                          {format(nextBooking.startTime, 'MMM. d, yyyy')}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-center'>
                          <ClockIcon
                            className={cn(
                              'w-4 h-4',
                              'font-light',
                              'text-[#81BD71]',
                            )}
                          />
                          <span className='font-light text-gray-700 text-nowrap ml-2'>
                            {format(nextBooking.startTime, 'h:mm a')} –{' '}
                            {format(nextBooking.endTime, 'h:mm a')}
                          </span>
                        </div>

                        <div className='flex flex-row items-center justify-center'>
                          <LayoutPanelLeft
                            className={cn('w-4 h-4 mx-2 text-[#81BD71]')}
                          />
                          <span className='font-light text-gray-700 text-nowrap'>
                            Room {nextBooking.room}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='flex flex-row items-center justify-center min-h-[75px]'>
                      <p>You do not have any upcoming bookings.</p>
                    </div>
                  )}
                </PageSection>

                <PageSection
                  heading='Upcoming Bookings'
                  variant='white'
                  headingClassName='bg-cyan-400 capitalize'
                  leftIcon={CalendarDaysIcon}
                  className='rounded-lg'
                >
                  {nextBookingsData.length > 0 ? (
                    <div className='flex flex-col gap-8'>
                      {nextBookingsData.map((booking) => {
                        return (
                          <BookingTimeslot
                            key={booking._id}
                            startTime={booking.startTime}
                            endTime={booking.endTime}
                            room={booking.room}
                            handleExpand={handleExpand}
                            variant='next'
                          ></BookingTimeslot>
                        );
                      })}
                    </div>
                  ) : (
                    <div className='flex flex-row items-center justify-center min-h-[75px]'>
                      <p>You do not have any upcoming bookings.</p>
                    </div>
                  )}
                </PageSection>
              </div>
            </div>

            <div className='relative flex flex-row justify-center rounded-lg border-1 border-primary-800 bg-white py-4 px-2 file:transition hover:opacity-100'>
              <div className='flex flex-row md:justify-items-center md:items-center '>
                <p className='text-gray-700 text-center text-nowrap w-full'>
                  <i>
                    If you have any questions, contact the Hatch coordinator or
                    fill out our issue report form:
                  </i>
                </p>
              </div>

              <ButtonLink
                href='mailto:ghc@mcmaster.ca'
                target='_blank'
                className='drop-shadow-md rounded-full bg-red-50 text-primary-700 transition-colors duration-75 cursor-pointer scale-75 text-nowrap'
                size='sm'
                leftIcon={MailIcon}
              >
                Email coordinator
              </ButtonLink>

              <ButtonLink
                href='https://docs.google.com/forms/d/e/1FAIpQLSfCu5qtc2_HmYWJfM7aYtO0jcDEoB6rAt9VXJx-Op0k_Gc-kQ/viewform'
                target='_blank'
                className='drop-shadow-md rounded-full bg-red-50 text-primary-700 transition-colors duration-75 cursor-pointer scale-75 text-nowrap'
                size='sm'
                leftIcon={MessageCircleWarningIcon}
              >
                Report Issue
              </ButtonLink>
            </div>

            <div className='p-10 flex justify-center w-full'>
              <button
                className='rounded-full py-1.5 px-3 bg-sky-500 hover:bg-blue-500 text-white'
                onClick={() => setOpen(true)}
              >
                ···
              </button>
              <RebookModal
                open={open}
                onClose={() => setOpen(false)}
                startTime={displayStartTime}
                endTime={displayEndTime}
                userRoom={displayRoom}
              ></RebookModal>
            </div>
          </section>
        </main>
      </PageLayout>
    </QueryClientProvider>
  );
};

export default UserDashboard;
