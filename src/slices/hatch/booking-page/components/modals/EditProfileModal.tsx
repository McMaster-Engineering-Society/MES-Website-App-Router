'use client';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { ChangeEvent, useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

import { TProfile } from '@/slices/auth/types';

type EditProfileModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  profile: TProfile;
};

export default function EditProfileModal({
  isOpen,
  onOpenChange,
  profile,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    program: '',
    year: '',
    hatchNumber: '',
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        email: profile.email || '',
        phoneNumber: profile.phoneNumber || '',
        program: profile.program || '',
        year: profile.year || '',
        hatchNumber: profile.hatchNumber || '',
      });
      setSuccessMessage(null);
    }
  }, [profile]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `/api/profiles/update-profile/${profile?.email}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setSuccessMessage('Account info updated successfully!');
      } else {
        // eslint-disable-next-line no-console
        console.log('Error in submitting form');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error while submitting form', error);
    }
  };

  return (
    <Modal
      size='lg'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement='center'
    >
      <ModalContent>
        <>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalBody className='flex flex-col items-center'>
            {successMessage && (
              <div className='text-green-700 mb-4'>{successMessage}</div>
            )}
            <form onSubmit={handleSubmit} id='editProfileForm'>
              <div className='flex flex-col items-start space-y-4 m-4'>
                <div className='flex flex-row space-x-5'>
                  <div>
                    <label htmlFor='firstname' className='block'>
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstname'
                      name='firstName'
                      value={formData.firstName}
                      onChange={(e) => handleChange(e)}
                      className='rounded-xl'
                    />
                  </div>

                  <div>
                    <label htmlFor='lastname' className='block'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastname'
                      name='lastName'
                      value={formData.lastName}
                      onChange={(e) => handleChange(e)}
                      className='rounded-xl'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='phonenumber' className='block'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phonenumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange(e)}
                    className='rounded-xl'
                  />
                </div>

                <div className='flex flex-row space-x-5'>
                  <div>
                    <label htmlFor='program' className='block'>
                      Program
                    </label>
                    <input
                      type='text'
                      id='program'
                      name='program'
                      value={formData.program}
                      onChange={(e) => handleChange(e)}
                      className='rounded-xl'
                    />
                  </div>

                  <div>
                    <label htmlFor='year' className='block'>
                      Year
                    </label>
                    <input
                      type='number'
                      id='year'
                      name='year'
                      value={formData.year}
                      onChange={(e) => handleChange(e)}
                      className='rounded-xl'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='hatchnumber' className='block'>
                    Hatch Card Number
                  </label>
                  <input
                    type='text'
                    id='hatchnumber'
                    name='hatchNumber'
                    value={formData.hatchNumber}
                    onChange={(e) => handleChange(e)}
                    className='rounded-xl'
                    disabled
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter className='justify-center'>
            <Button type='submit' form='editProfileForm'>
              Submit
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
