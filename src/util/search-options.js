export const mood_option = [
  { option: "😊 Feel Good,", input: "&with_genres=35|16|10751|10749" },
  { option: "😭 Need a Good Cry", input: "&with_genres=18 | 10749" },
  { option: "😂 Laugh Out Loud", input: "&with_genres=35" },
  { option: "️❤️ Romantic", input: "&with_genres=10749" },
  { option: "🤯 Mind-blowing", input: "&with_genres=9648|878|53" },
  { option: "😱 Thrilling", input: "&with_genres=53|28|80" },
  { option: "️🕵️‍♂️ Mystery", input: "&with_genres=80|9648" },
  { option: "🧙 Fantasy Escape", input: "&with_genres=14| 28" },
];

export const runtime_option = [
  { option: "~90min", input: "&with_runtime.lte=90" },
  { option: "90~120min", input: "&with_runtime.lte=120&with_runtime.gte=90" },
  {
    option: "120~150min",
    input: "&with_runtime.lte=150&with_runtime.gte=120",
  },
  { option: "150min", input: "&with_runtime.gte=150" },
];

export const review_option = [
  { option: "7.0 or more", input: "&vote_average.gte=7.0" },
  { option: "8.0 or more", input: "&vote_average.gte=8.0" },
  { option: "don't mind", input: null },
];

export const releaseDate_option = [
  {
    option: "Before 1960",
    input: "&primary_release_date.lte=1959-12-31",
  },
  {
    option: "1960 to 1990",
    input:
      "&primary_release_date.gte=1960-1-1&primary_release_date.lte=1989-12-31",
  },
  {
    option: "1990 to 2020",
    input:
      "&primary_release_date.gte=1990-1-1&primary_release_date.lte=2019-12-31",
  },
  { option: "2020 to now", input: "&primary_release_date.gte=2020-1-1" },
];
