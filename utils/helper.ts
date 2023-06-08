export const convertSlug = (name_en: string) => {
  const separator = "-"; // You can use any separator character
  console.log("Here is the title.. from product", name_en)
  // Remove leading/trailing spaces and convert to lowercase
  let slug = name_en.trim().toLowerCase();

  // Replace spaces with separator
  slug = slug.replace(/\s+/g, separator);

  // Remove non-alphanumeric characters (except separator)
  slug = slug.replace(/[^a-z0-9-]/g, "");

  // Remove consecutive occurrences of separator
  slug = slug.replace(new RegExp(`${separator}+`, "g"), separator);

  // Trim to desired length (e.g., 50 characters)
  slug = slug.slice(0, 50);

  return slug;
};

// export const generateTimeOptions = () => {
//   const timeOptions = [];
//   const startTime = 8;
//   const endTime = 23;
//   const timeGap = 90;

//   for (let hour = startTime; hour <= endTime; hour++) {
//     for (let minutes = 0; minutes < 60; minutes += timeGap) {
//       const startTimeString = `${hour.toString().padStart(2, "0")}:${minutes
//         .toString()
//         .padStart(2, "0")}`;
//       const endTimeString = `${(hour + 1).toString().padStart(2, "0")}:${(
//         minutes + timeGap
//       )
//         .toString()
//         .padStart(2, "0")}`;
//       const timeOption = `${startTimeString} - ${endTimeString}`;
//       timeOptions.push(
//         <option key={timeOption} value={timeOption}>
//           {timeOption}
//         </option>
//       );
//     }
//   }

//   return timeOptions;
// };
