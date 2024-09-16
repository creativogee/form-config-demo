import { Config } from '@crudmates/form-config';

const registrationForm: Config = {
  name: 'registrationForm',
  label: 'Registration Form',
  sections: [
    {
      name: 'personalInformation',
      label: 'Personal Information',
      items: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Enter your full name',
          validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
          },
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email address',
          validation: {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          },
        },
        {
          name: 'dateOfBirth',
          label: 'Date of Birth',
          type: 'date',
          placeholder: 'Select your date of birth',
          validation: {
            required: true,
          },
        },
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          placeholder: 'Select your country',
          dataSource: 'options',
          options: [
            { label: 'Nigeria', value: 'NG' },
            { label: 'United States', value: 'US' },
            { label: 'Canada', value: 'CA' },
            { label: 'Mexico', value: 'MX' },
          ],
          validation: {
            required: true,
          },
        },
      ],
    },
    {
      name: 'accountInformation',
      label: 'Account Information',
      items: [
        {
          name: 'username',
          label: 'Username',
          type: 'text',
          placeholder: 'Choose a username',
          validation: {
            required: true,
            minLength: 3,
            maxLength: 20,
          },
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
          validation: {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          },
        },
        {
          name: 'accountType',
          label: 'Account Type',
          type: 'select',
          options: [
            { label: 'Personal', value: 'personal' },
            { label: 'Business', value: 'business' },
          ],
          validation: {
            required: true,
          },
        },
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
          placeholder: 'Enter your company name',
          validation: {
            minLength: 2,
            maxLength: 100,
          },
          conditions: {
            show: {
              field: 'accountType',
              operator: 'EQUAL',
              value: 'business',
            },
          },
        },
        {
          name: 'referralCode',
          label: 'Referral Code',
          type: 'hidden',
          placeholder: 'Enter referral code (if any)',
        },
      ],
    },
    {
      name: 'termsAndConditions',
      label: 'Terms and Conditions',
      items: [
        {
          name: 'termsAccepted',
          label: 'I accept the terms and conditions',
          type: 'checkbox',
          validation: {
            required: true,
          },
        },
      ],
    },
    {
      name: '',
      label: '',
      items: [
        {
          name: 'submit',
          label: 'Submit',
          type: 'submit',
        },
      ],
    },
  ],
};

export default registrationForm;
