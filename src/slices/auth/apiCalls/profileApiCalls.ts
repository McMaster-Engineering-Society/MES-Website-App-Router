export const fetchProfileByEmail = async (email: string | null) => {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  if (email === null) {
    throw new Error('Email does not exist, cannot fetch profile.');
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/profiles/email/' + email,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
};
