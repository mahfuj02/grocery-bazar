export const convertSlug = (title: string) => {
    const separator = "-"; // You can use any separator character

    // Remove leading/trailing spaces and convert to lowercase
    let slug = title.trim().toLowerCase();

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