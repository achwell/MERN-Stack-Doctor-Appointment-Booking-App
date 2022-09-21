import React from "react";
import {Button, Form, Input} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import {hideLoading, showLoading} from "../redux/alertsSlice";
import {useDispatch} from "react-redux";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {control, formState: {errors}, handleSubmit} = useForm();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/register", values)
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/login")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Noe gikk galt")
        }
    }
    return (
        <div className="authentication">
            <div className="authentication-form card p-3">
                <h1 className="card-title">Nice To Meet U</h1>
                <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
                    <Form.Item label="Name" name="name">
                        <Controller name="name" control={control}
                                    render={({field}) => <Input placeholder="Name"  {...field} />}/>
                        {errors.name && <div className="ant-form-item-explain-error">{errors.name}</div>}
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Controller name="email" control={control}
                                    render={({field}) => <Input type="email" placeholder="Email"  {...field} />}/>
                        {errors.email && <div className="ant-form-item-explain-error">{errors.email}</div>}
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Controller name="password" control={control}
                                    render={({field}) => <Input type="password" placeholder="Password"  {...field} />}/>
                        {errors.password && <div className="ant-form-item-explain-error">{errors.password}</div>}
                    </Form.Item>

                    <Button
                        className="primary-button my-2 full-width-button"
                        htmlType="submit"
                    >
                        REGISTER
                    </Button>

                    <Link to="/login" className="anchor mt-2">
                        CLICK HERE TO LOGIN
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default Register
