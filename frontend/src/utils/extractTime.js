export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	const period = hours >= 12 ? 'PM' : 'AM';
	const twelveHourFormat = hours % 12 || 12;
	return `${twelveHourFormat}:${minutes} ${period}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}

