'use client';

import { useDisclosure } from '@nextui-org/react';
import { TBooking } from '@slices/hatch/booking-page/types';
import { format } from 'date-fns';
import {
  CalendarClockIcon,
  CalendarDaysIcon,
  ClockIcon,
  LayoutPanelLeft,
  MailIcon,
  MessageCircleWarningIcon,
  UserRoundCogIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import LoadingIcon from '@/components/layout/LoadingIcon';
import ButtonLink from '@/components/links/ButtonLink';
import PageSection from '@/components/PageSection';

import ProfilePicture from '@/constant/user-dashboard/ProfilePictureSvg';
import { useSessionContext } from '@/slices/auth/context/SessionContext';
import { fetchNextBookingsByEmail } from '@/slices/hatch/booking-page/apiCalls/bookingApiCalls';
import { BookingTimeslot } from '@/slices/hatch/booking-page/components/BookingTimeslot';
import { BookingTimeslotPagination } from '@/slices/hatch/booking-page/components/BookingTimeslotPagination';
import EditButton from '@/slices/hatch/booking-page/components/buttons/EditButton';
import EditProfileModal from '@/slices/hatch/booking-page/components/modals/EditProfileModal';
import ExpandModal from '@/slices/hatch/booking-page/components/modals/ExpandModal';
import {
  useNextBookings,
  usePastBookings,
} from '@/slices/hatch/booking-page/hooks/bookingHooks';
import { add30Minutes } from '@/slices/hatch/booking-page/utils';

const UserDashboard = () => {
  const { profile } = useSessionContext();

  const [nextBookingsPage, setNextBookingsPage] = useState<number>(1);
  const [pastBookingsPage, setPastBookingsPage] = useState<number>(1);
  const { data: nextBookingsData, isLoading: isNextLoading } = useNextBookings(
    profile?.email,
    nextBookingsPage,
  );
  const { data: pastBookingsData, isLoading: isPastLoading } = usePastBookings(
    profile?.email,
    pastBookingsPage,
  );
  const [nextBooking, setNextBooking] = useState<TBooking | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [displayStartTime, setDisplayStartTime] = useState<Date>(new Date());
  const [displayEndTime, setDisplayEndTime] = useState<Date>(new Date());
  const [displayRoom, setDisplayRoom] = useState<string>('');
  const [displayUserId, setDisplayUserId] = useState<string>('');
  const [displayEmail, setDisplayEmail] = useState<string>('');
  const [displayId, setDisplayId] = useState<string>('');
  const [displayShowCancelOption, setDisplayShowCancelOption] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchNextBooking = async () => {
      const email = profile?.email;
      if (!email) return;

      try {
        const nextBookings = await fetchNextBookingsByEmail(email, 1, 1); // Fetch only 1 booking
        if (nextBookings && nextBookings.newBookings.length > 0) {
          setNextBooking(nextBookings.newBookings[0]); // Set the next booking
        } else {
          setNextBooking(null); // Handle no bookings case
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch the next booking:', error);
      }
    };

    fetchNextBooking();
  }, [profile]);

  // You can add logic to handle what happens when the nextBooking is set, e.g.:
  useEffect(() => {
    if (nextBooking) {
      setDisplayStartTime(new Date(nextBooking.startTime));
      setDisplayEndTime(new Date(nextBooking.endTime));
      setDisplayRoom(nextBooking.room);
      setDisplayUserId(nextBooking.userId);
      setDisplayEmail(nextBooking.email);
      setDisplayId(nextBooking._id?.toString() || '');
    }
  }, [nextBooking]);

  function handleExpand(
    startTime: Date,
    endTime: Date,
    room: string,
    userId: string,
    email: string,
    id: string,
    showCancelOption = true,
  ) {
    setOpen(true);
    setDisplayStartTime(startTime);
    setDisplayEndTime(endTime);
    setDisplayRoom(room);
    setDisplayUserId(userId);
    setDisplayEmail(email);
    setDisplayId(id);
    setDisplayShowCancelOption(showCancelOption);
  }

  return (
    <section className='flex flex-col gap-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10'>
        <PageSection
          heading='Account Information'
          variant='white'
          headingVariant='lavendar'
          headingCapitalize={true}
          leftIcon={UserRoundCogIcon}
          className='rounded-lg max-h-[350px]'
        >
          {profile && (
            <div className='flex flex-row items-center justify-center gap-6 min-h-[75px]'>
              <ProfilePicture />
              <div className='flex flex-col items-start'>
                <div className='flex flex-row place-items-center space-x-2'>
                  <p className='text-2xl font-bold'>
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className='text-gray-500 font-light underline'>
                    {profile.email}
                  </p>
                </div>
                <div className='flex flex-row place-items-center space-x-2 text-gray-500 font-light'>
                  {profile.program && (
                    <p>
                      {profile.program} {profile.year}
                    </p>
                  )}
                  {profile.hatchNumber && <p>hatch#{profile.hatchNumber}</p>}
                  {profile.phoneNumber && <p>{profile.phoneNumber}</p>}
                </div>
              </div>
              <EditButton onClick={onOpen} variant='lavendar' size='sm' />
            </div>
          )}
        </PageSection>

        <PageSection
          heading='Your Next Booking'
          variant='white'
          headingVariant='light-green'
          headingCapitalize={true}
          leftIcon={CalendarClockIcon}
          className='rounded-lg'
        >
          {nextBooking ? (
            <div className='flex flex-row justify-evenly items-center min-h-[75px]'>
              <div className='flex flex-row items-center justify-center bg-[#CAFFB1] max-h-[24px] max-w-[200px] border-1 border-[#81BD71] rounded-xl px-8 py-4'>
                <span className='text-nowrap'>
                  {format(nextBooking.startTime, 'MMM. d, yyyy')}
                </span>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-center'>
                  <ClockIcon
                    className={cn('w-4 h-4', 'font-light', 'text-[#81BD71]')}
                  />
                  <span className='font-light text-gray-700 text-nowrap ml-2'>
                    {format(nextBooking.startTime, 'h:mm a')} –{' '}
                    {format(add30Minutes(nextBooking.endTime), 'h:mm a')}
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
              <EditButton
                onClick={() =>
                  handleExpand(
                    nextBooking.startTime,
                    nextBooking.endTime,
                    nextBooking.room,
                    nextBooking.userId,
                    nextBooking.email,
                    nextBooking._id?.toString() ?? '',
                  )
                }
                variant='light-green'
                size='sm'
              />
            </div>
          ) : (
            <div className='flex flex-row items-center justify-center min-h-[75px]'>
              <p>You do not have any next booking.</p>
            </div>
          )}
        </PageSection>

        <PageSection
          heading='Past Bookings'
          variant='white'
          headingVariant='slate'
          headingCapitalize={true}
          leftIcon={CalendarDaysIcon}
          className='rounded-lg'
        >
          <BookingTimeslotPagination
            page={pastBookingsPage}
            setPage={setPastBookingsPage}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
            totalPages={pastBookingsData?.totalCount!}
          />
          {isPastLoading && <LoadingIcon />}
          {!isPastLoading &&
          pastBookingsData &&
          pastBookingsData.newPastBookings.length > 0 ? (
            <div className='flex flex-col gap-8 min-h-[75px]'>
              {pastBookingsData.newPastBookings.map((booking, index) => {
                return (
                  <BookingTimeslot
                    key={index}
                    startTime={booking.startTime}
                    endTime={booking.endTime}
                    room={booking.room}
                    variant='previous'
                    handleExpand={() =>
                      handleExpand(
                        booking.startTime,
                        booking.endTime,
                        booking.room,
                        booking.userId,
                        booking.email,
                        booking._id?.toString() ?? '',
                        false,
                      )
                    }
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

        <PageSection
          heading='Upcoming Bookings'
          variant='white'
          headingVariant='cyan'
          headingCapitalize={true}
          leftIcon={CalendarDaysIcon}
          className='rounded-lg'
        >
          <BookingTimeslotPagination
            page={nextBookingsPage}
            setPage={setNextBookingsPage}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
            totalPages={nextBookingsData?.totalCount!}
          />
          {nextBookingsData && nextBookingsData.newBookings.length > 0 ? (
            <div className='flex flex-col gap-8'>
              {isNextLoading && <LoadingIcon />}
              {!isNextLoading &&
                nextBookingsData.newBookings.map((booking, index) => {
                  return (
                    <BookingTimeslot
                      key={index}
                      startTime={booking.startTime}
                      endTime={booking.endTime}
                      room={booking.room}
                      variant='next'
                      handleExpand={() =>
                        handleExpand(
                          booking.startTime,
                          booking.endTime,
                          booking.room,
                          booking.userId,
                          booking.email,
                          booking._id?.toString() ?? '',
                        )
                      }
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
      <div className='relative flex flex-row justify-center rounded-lg border-1 border-primary-800 bg-white py-4 px-2 file:transition hover:opacity-100'>
        <div className='flex flex-row md:justify-items-center md:items-center '>
          <p className='text-gray-700 text-center text-nowrap w-full'>
            <i>
              If you have any questions, contact the Hatch coordinator or fill
              out our issue report form:
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

      <ExpandModal
        open={open}
        onClose={() => setOpen(false)}
        startTime={displayStartTime}
        endTime={displayEndTime}
        userRoom={displayRoom}
        userId={displayUserId}
        email={displayEmail}
        id={displayId}
        includeCancel={displayShowCancelOption}
      ></ExpandModal>

      {profile && (
        <EditProfileModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          profile={profile}
        ></EditProfileModal>
      )}
    </section>
  );
};

export default UserDashboard;
