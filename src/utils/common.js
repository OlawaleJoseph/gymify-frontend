export const localStorageHeadersKey = 'gymifyHeaders';

export const storeHeaders = headerObj => (
  localStorage.setItem(localStorageHeadersKey, JSON.stringify(headerObj))
);

export const getHeaders = () => JSON.parse(localStorage.getItem(localStorageHeadersKey));

export const removeHeaders = () => localStorage.removeItem(localStorageHeadersKey);

export const makeGraphData = arr => {
  const todaysDate = new Date();
  const currentYear = todaysDate.getFullYear();
  const currentMonth = todaysDate.getMonth();
  const monthlySessions = arr.filter(session => {
    const sessionDate = new Date(session.start_time);
    return sessionDate.getFullYear() === currentYear && sessionDate.getMonth() === currentMonth;
  });
  return monthlySessions.map(({ duration }) => parseFloat((duration / 3600).toFixed(1)));
};

export const formatDurationOutput = seconds => {
  let res = '';
  if (seconds >= 3600) {
    const timeDiff = parseInt(Math.round(seconds / 3600), 10);
    if (timeDiff > 1) {
      res = `${timeDiff} Hours`;
    } else {
      res = `${timeDiff} Hour`;
    }
  } else {
    const timeDiff = parseInt(Math.round(seconds / 60), 10);
    if (timeDiff > 1) {
      res = `${timeDiff} Minutes`;
    } else {
      res = `${timeDiff} Minute`;
    }
  }
  return res;
};

export const getLatestSession = arr => {
  let max = Number.MAX_SAFE_INTEGER;
  let latestSession = null;
  const todaysTime = Date.now(new Date());
  for (let i = 0; i < arr.length; i += 1) {
    const sessionTime = Date.parse(arr[i].start_time);
    const diff = sessionTime - todaysTime;
    if (diff > 0 && diff < max) {
      max = diff;
      latestSession = arr[i];
    }
  }
  return latestSession;
};

export const timeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
