'use client'
import { DatePicker, Form, Input, Select } from 'antd';
import React from 'react';

const AddAGuestSpotPAge = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    }
    return (
        <div className='container mx-auto px-2 md:px-0'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-2xl font-bold'>Add A Guest Spot</h1>
                <p className='text-primary'>Create a new guest spot to invite talented artists .</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                
                    onFinish={onFinish}
                    layout="vertical"
                    className=" md:w-[600px]"
                >
                    <Form.Item
                        name="Service"
                        label={<p className=" text-md">Service</p>}
                        style={{}}
                    >
                        <Select placeholder="Select a service">
                            <Select.Option value="service1">Service 2</Select.Option>
                            <Select.Option value="service1">Service 2</Select.Option>
                            <Select.Option value="service1">Service 3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="location" label={<p className=" text-md">Primary Location</p>}>
                        <Input
                            required
                            style={{ padding: "6px" }}
                            className=" text-md"
                            type="Primary Location"
                            placeholder="Primary Location"
                        />
                    </Form.Item>
                    <Form.Item name="availableDates" label={<p className=" text-md">Available Dates</p>}>
                        <div className='flex justify-between items-center gap-2 w-full'>
                            <DatePicker placeholder='From' style={{ width: "50%" }} />
                            <DatePicker placeholder='to' style={{ width: "50%" }} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="availableSlots"
                        label={<p className=" text-md">Available slots</p>}
                        style={{}}
                    >
                        <Select placeholder="Select">
                            <Select.Option value="Available slots1">Available slots 2</Select.Option>
                            <Select.Option value="Available slots1">Available slots 2</Select.Option>
                            <Select.Option value="Available slots1">Available slots 3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="submit">
                        <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full">Add Guest Spot</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AddAGuestSpotPAge; 