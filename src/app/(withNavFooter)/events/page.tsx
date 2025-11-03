'use client';
import { FieldValues } from '@/types';
import { DatePicker, Form, Input, Select, TimePicker, Upload } from 'antd';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';

const CreateEventsPage = () => {
  const onFinish = (values: FieldValues) => {
    console.log('Success:', values);
  };
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleProfilePicUpload = (info: UploadChangeParam<UploadFile<any>>) => {
    const fileObj = info.file.originFileObj;
    if (fileObj instanceof File) {
      setProfilePic(fileObj);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-bold">Create a New Event</h1>
        <p className="text-primary">Plan, promote, and manage your events .</p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Form
          name="events"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="md:w-[600px]"
        >
          <Form.Item name="image">
            <div className="flex justify-center">
              <div className="border-dashed border-2 py-14 flex flex-col justify-center items-center w-full">
                <Upload
                  showUploadList={false}
                  maxCount={1}
                  onChange={handleProfilePicUpload}
                  className="cursor-pointer"
                >
                  <FaPlus className="text-primary" />
                </Upload>
                <p className="text-primary">Upload Event Image</p>
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name="eventName"
            label={<p className=" text-md">Event Name</p>}
          >
            <Input
              required
              style={{ padding: '6px' }}
              className=" text-md"
              placeholder="Event Name"
            />
          </Form.Item>
          <Form.Item
            name="type"
            label={<p className=" text-md">Event Type</p>}
            style={{}}
          >
            <Select placeholder="Select a Event Type">
              <Select.Option value="Event Type1">Event Type 2</Select.Option>
              <Select.Option value="Event Type1">Event Type 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="eventsSlots"
            label={<p className=" text-md">Events slots</p>}
            style={{}}
          >
            <Select placeholder="Select">
              <Select.Option value="Events slots1">
                Events slots 2
              </Select.Option>
              <Select.Option value="Events slots1">
                Events slots 2
              </Select.Option>
              <Select.Option value="Events slots1">
                Events slots 3
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="fee"
            label={<p className=" text-md">Registration fee (Optional)</p>}
          >
            <Input
              required
              style={{ padding: '6px' }}
              className=" text-md"
              placeholder="Event Price"
            />
          </Form.Item>
          <Form.Item
            name="location"
            label={<p className=" text-md">Primary Location</p>}
          >
            <Input
              required
              style={{ padding: '6px' }}
              className=" text-md"
              type="Primary Location"
              placeholder="Primary Location"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label={<p className=" text-md">Description</p>}
          >
            <Input.TextArea
              required
              style={{ padding: '6px' }}
              className=" text-md"
              placeholder="Description"
            />
          </Form.Item>
          <Form.Item name="dates" label={<p className=" text-md"> Dates</p>}>
            <div className="flex justify-between items-center gap-2 w-full">
              <DatePicker placeholder="From" style={{ width: '50%' }} />
              <DatePicker placeholder="to" style={{ width: '50%' }} />
            </div>
          </Form.Item>
          <Form.Item name="time" label={<p className=" text-md"> Time</p>}>
            <div className="flex justify-between items-center gap-2 w-full">
              <TimePicker placeholder="From" style={{ width: '50%' }} />
              <TimePicker placeholder="to" style={{ width: '50%' }} />
            </div>
          </Form.Item>

          <Form.Item name="submit">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
            >
              Confirm
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateEventsPage;
