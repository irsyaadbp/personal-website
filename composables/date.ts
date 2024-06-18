export function useDate() {
  function isValidDate(dateString: any) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  function formatMonthDate(dateString: string, month: 'short' | 'long' = "short") {
    const date = new Date(dateString);
    const options = { year: "numeric", month };
    return date.toLocaleDateString("en-US", options);
  }

  function getYearDifference(startYear: number) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }

  function yearsOfCareer() {
    return getYearDifference(2019)
  }

  return { isValidDate, formatMonthDate, getYearDifference, yearsOfCareer };
}
