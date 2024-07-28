export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function parseISOString(s: string) {
  const numbersAsStringList = s.split(/\D+/);
  const numbers = numbersAsStringList.map((numberString: string) =>
    parseInt(numberString),
  );
  return new Date(
    Date.UTC(
      numbers[0],
      --numbers[1],
      numbers[2],
      numbers[3],
      numbers[4],
      numbers[5],
      numbers[6],
    ),
  );
}

// colour pool for ButtonLinks used in Get Money section
export const getRandomColour = () => {
  // normal background colour, on hover colour, border colour (border matches normal bg)
  const colourList = [
    'bg-red-300 hover:bg-red-400 border-red-300',
    'bg-green-300 hover:bg-green-400 border-green-300',
    'bg-blue-300 hover:bg-blue-400 border-blue-300',
    'bg-yellow-300 hover:bg-yellow-400 border-yellow-300',
    'bg-pink-300 hover:bg-pink-400 border-pink-300',
    'bg-purple-300 hover:bg-purple-400 border-purple-300',
    'bg-orange-200 hover:bg-orange-400 border-orange-200',
    'bg-teal-200 hover:bg-teal-400 border-teal-200',
    'bg-indigo-300 hover:bg-indigo-400 border-indigo-300',
    'bg-amber-300 hover:bg-amber-400 border-amber-300',
    'bg-cyan-200 hover:bg-cyan-400 border-cyan-200',
  ];
  return colourList[Math.floor(Math.random() * colourList.length)];
};

export const timeout = (delay: number) =>
  new Promise((res) => setTimeout(res, delay));
