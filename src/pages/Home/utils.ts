
  export function getYearsOfExperience(date: Date) {
    const miliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const hours = 24;
    const days = 365.25;

    const today = new Date();
    const diffInMilliseconds = today.getTime() - date.getTime();
    const diffInYears = diffInMilliseconds / (miliseconds * seconds * minutes * hours * days);

    return Math.floor(diffInYears);
  }
