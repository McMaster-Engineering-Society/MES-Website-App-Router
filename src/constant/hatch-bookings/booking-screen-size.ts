export type Sizes = 'lg' | 'md' | 'sm' | 'xs';

type BookingDayLength = {
  [key in Sizes]: 7 | 3 | 1;
};

export const BookingDayLengthFromScreenSize: BookingDayLength = {
  lg: 7,
  md: 3,
  sm: 1,
  xs: 1,
};
