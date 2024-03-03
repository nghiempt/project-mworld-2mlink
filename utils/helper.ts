export function generateCode(): string {
  const currentHour = new Date().getHours().toString().padStart(2, '0');
  const code = currentHour.repeat(2);
  return code;
}