export function formatYear(yearString) {
    // Remove any non-digit characters from the input string
    const cleanYearString = yearString.replace(/\D/g, '');

    // Check if the cleaned string is empty
    if (cleanYearString === '') {
        return 'None';
    }

    // Determine the year format based on the length of the cleaned string
    switch (cleanYearString.length) {
        case 4: // YYYY
        return cleanYearString;
        case 8: // YYYY/YYYY
        return `${cleanYearString.slice(0, 4)}/${cleanYearString.slice(4)}`;
        default:
        return yearString;
    }
}


export function formatLongText(text) {
    // Regular expression to match and remove years (four-digit numbers)
    const yearRegex = /\b\d{4}\b/g;
    
    // Remove years from the text
    const textWithoutYears = text.replace(yearRegex, '');

    // Shorten the text to a specified maximum length
    const maxLength = 15; 
    const shortenedText = textWithoutYears.length > maxLength
    ? textWithoutYears.substring(0, maxLength) + '...' 
    : textWithoutYears;

    return shortenedText.trim(); 
}
