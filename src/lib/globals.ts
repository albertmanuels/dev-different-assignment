/**
 * Formats a number or string to a USD currency format with commas
 * @param value - The number or string to format (e.g., "2000000", 2000000)
 * @returns Formatted currency string (e.g., "$2,000,000")
 */
export function formatCurrency(value: number | string): string {
  // Convert string to number if needed
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  // Check if the value is a valid number
  if (isNaN(numValue)) {
    return '$0';
  }
  
  // Format the number with commas and add dollar sign
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numValue);
}
