import {Button, Col, Form, Input, Row, TimePicker} from "antd";
import moment from "moment";
import React from "react";
import {Controller, useForm} from "react-hook-form";

function DoctorForm({onFinish, initivalValues}) {
    const {control, formState: {errors}, handleSubmit} = useForm({
        defaultValues: {
            ...initivalValues,
            ...(initivalValues && {
                timings: [
                    moment(initivalValues?.timings[0], "HH:mm"),
                    moment(initivalValues?.timings[1], "HH:mm"),
                ],
            }),
        }
    });
    return (
        <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
            <h1 className="card-title mt-3">Personal Information</h1>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="First Name" name="firstName">
                        <Controller name="firstName" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="First Name"  {...field} />}/>
                        {errors.firstName && <div className="ant-form-item-explain-error">{errors.firstName}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Last Name" name="lastName">
                        <Controller name="lastName" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="Last Name"  {...field} />}/>
                        {errors.lastName && <div className="ant-form-item-explain-error">{errors.lastName}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Phone Number" name="phoneNumber">
                        <Controller name="phoneNumber" control={control} rules={{required: true}}
                                    render={({field}) => <Input type="tel" placeholder="Phone Number"  {...field} />}/>
                        {errors.phoneNumber && <div className="ant-form-item-explain-error">{errors.phoneNumber}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Website" name="website">
                        <Controller name="website" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="Website"  {...field} />}/>
                        {errors.website && <div className="ant-form-item-explain-error">{errors.website}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Address" name="address">
                        <Controller name="address" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="Address"  {...field} />}/>
                        {errors.address && <div className="ant-form-item-explain-error">{errors.address}</div>}
                    </Form.Item>
                </Col>
            </Row>
            <hr/>
            <h1 className="card-title mt-3">Professional Information</h1>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Specialization" name="specialization">
                        <Controller name="specialization" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="Specialization"  {...field} />}/>
                        {errors.specialization &&
                            <div className="ant-form-item-explain-error">{errors.specialization}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Experience" name="experience">
                        <Controller name="experience" control={control} rules={{required: true}}
                                    render={({field}) => <Input placeholder="Experience"  {...field} />}/>
                        {errors.experience && <div className="ant-form-item-explain-error">{errors.experience}</div>}
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item label="Fee Per Cunsultation" name="feePerCunsultation">
                            <Controller name="feePerCunsultation" control={control} rules={{required: true}}
                                        render={({field}) => <Input type="number"
                                                                    placeholder="Fee Per Cunsultation"  {...field} />}/>
                            {errors.feePerCunsultation &&
                                <div className="ant-form-item-explain-error">{errors.feePerCunsultation}</div>}
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item label="Timings" name="timings">
                            <Controller name="timings" control={control} rules={{required: true}}
                                        render={({field}) => <TimePicker.RangePicker format="HH:mm" {...field} />}/>
                            {errors.timings && <div className="ant-form-item-explain-error">{errors.timings}</div>}
                        </Form.Item>
                    </Col>
                </Col>
            </Row>

            <div className="d-flex justify-content-end">
                <Button className="primary-button" htmlType="submit">
                    SUBMIT
                </Button>
            </div>
        </Form>
    );
}

export default DoctorForm;
