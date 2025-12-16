export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
  // min 8 chars, one number, one special char
  return /^(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}
