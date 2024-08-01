export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TMessageResponse = {
  message: string;
};

export type TApiResponse<T> = {
  data: T | null;
  message?: string;
};

export type UHSForm = {
  _id: string;
  clubId: string;
  formInfo: string;
  formStatus: 'pending' | 'approved' | 'rejected';
}


