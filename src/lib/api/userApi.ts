export const fetchUserByEmail = async (email: string) => {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/users/get-user-by-email?email=' + email,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
};
