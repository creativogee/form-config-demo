import { z } from 'zod';

export const schema = z.object({
  accountType: z.string().min(1, 'Select an account type'),
  country: z.string().min(1, 'Select a country'),
  dateOfBirth: z.string().min(1, 'Select your date of birth'),
  email: z.string().email('Enter a valid email address'),
  fullName: z.string().min(1, 'Enter your full name'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  username: z.string().min(1, 'Choose a username'),
  termsAccepted: z.string().min(1, 'You must accept the terms and conditions'),
  companyName: z.string().optional(),
  referrerCode: z.string().optional(),
});
