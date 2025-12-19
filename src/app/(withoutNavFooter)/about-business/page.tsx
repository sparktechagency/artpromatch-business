/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Form, Input, Radio, Checkbox, Typography } from 'antd';
import { AllImages } from '@/assets/images/AllImages';

interface Location {
  type: 'Point';
  coordinates: [number, number];
}

interface BusinessFormValues {
  studioName: string;
  businessType: 'Studio' | 'Event Organizer' | 'Both';
  servicesOffered: string[];
  primaryLocation: string;
  contactNumber: string;
  contactEmail: string;
}

const AboutBusiness: React.FC = () => {
  const router = useRouter();

  const location: Location = {
    type: 'Point',
    coordinates: [77.0451, 28.7041],
  };

  const city = 'Delhi';

  const onFinish = (values: BusinessFormValues) => {
    try {
      localStorage.setItem('studioName', JSON.stringify(values.studioName));
      localStorage.setItem('businessType', JSON.stringify(values.businessType));
      localStorage.setItem(
        'servicesOffered',
        JSON.stringify(values.servicesOffered)
      );
      localStorage.setItem('location', JSON.stringify(location));
      localStorage.setItem('city', JSON.stringify(city));
      localStorage.setItem(
        'contactNumber',
        JSON.stringify(values.contactNumber)
      );
      localStorage.setItem('contactEmail', JSON.stringify(values.contactEmail));

      router.push('/operating-hours');
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div className="py-16 md:py-0 h-screen w-full flex items-center justify-center">
      <div className="pt-32 pb-16">
        <div className="md:w-112.5">
          <Form<BusinessFormValues>
            name="about-business"
            layout="vertical"
            initialValues={{}}
            onFinish={onFinish}
          >
            {/* Header */}
            <div className="mb-4 flex flex-col justify-center items-center text-center">
              <Image src={AllImages.logo} width={50} height={50} alt="logo" />
              <h2 className="text-center text-2xl font-bold mt-6 mb-2 text-primary">
                Tell Us About Your Business
              </h2>
              <Typography.Text className="text-center text-base">
                Provide key details about your business to help us showcase it
                to artists and clients effectively.
              </Typography.Text>
            </div>

            {/* Business Name */}
            <Form.Item
              name="studioName"
              label={<p className="text-md">Business Name</p>}
              style={{ width: '90%', margin: 'auto', marginBottom: '10px' }}
              rules={[
                { required: true, message: 'Please enter your business name' },
              ]}
            >
              <Input placeholder="Your Business Name" />
            </Form.Item>

            {/* Business Type */}
            <Form.Item
              name="businessType"
              label={<p className="px-6 text-md">Business Type</p>}
              rules={[
                { required: true, message: 'Please select a business type' },
              ]}
            >
              <Radio.Group className="flex flex-col gap-4 w-full px-6">
                <Radio value="Studio">Studio</Radio>
                <Radio value="Event Organizer">Event Organizer</Radio>
                <Radio value="Both">Both</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Services Offered */}
            <Form.Item
              name="servicesOffered"
              label={<p className="px-6 text-md">Services Offered</p>}
              rules={[
                {
                  required: true,
                  message: 'Please select at least one service',
                },
              ]}
            >
              <Checkbox.Group className="flex flex-col gap-4 w-full px-6">
                <Checkbox value="Tattoo Spaces for Guest/Resident artists">
                  Tattoo Spaces for Guest/Resident artists
                </Checkbox>
                <Checkbox value="Piercing Rooms for Guest/Resident artists">
                  Piercing Rooms for Guest/Resident artists
                </Checkbox>
                <Checkbox value="Events">Events</Checkbox>
                <Checkbox value="Other">Other</Checkbox>
              </Checkbox.Group>
            </Form.Item>

            {/* Primary Location */}
            <Form.Item
              name="primaryLocation"
              label={<p className="text-md">Primary Location</p>}
              style={{ width: '90%', margin: 'auto', marginBottom: '10px' }}
              rules={[
                {
                  required: true,
                  message: 'Please enter your primary location',
                },
              ]}
            >
              <Input placeholder="Your Primary Location" />
            </Form.Item>

            {/* Contact Number */}
            <Form.Item
              name="contactNumber"
              label={<p className="text-md">Phone Number</p>}
              style={{ width: '90%', margin: 'auto', marginBottom: '10px' }}
              rules={[
                { required: true, message: 'Please enter your phone number' },
                {
                  pattern: /^[0-9+\-\s]{7,15}$/,
                  message: 'Enter a valid phone number',
                },
              ]}
            >
              <Input placeholder="Your Phone Number" />
            </Form.Item>

            {/* Email Address */}
            <Form.Item
              name="contactEmail"
              label={<p className="text-md">Email Address</p>}
              style={{ width: '90%', margin: 'auto', marginBottom: '10px' }}
              rules={[
                { required: true, message: 'Please enter your email address' },
                { type: 'email', message: 'Enter a valid email' },
              ]}
            >
              <Input placeholder="Your Email Address" />
            </Form.Item>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg mt-5 mx-2 md:mx-0"
            >
              Continue
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
