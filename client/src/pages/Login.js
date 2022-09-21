import React from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, Form, Input} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {hideLoading, showLoading} from "../redux/alertsSlice";
import {useDispatch} from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {control, formState: {errors}, handleSubmit} = useForm();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/login", values);
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem("token", response.data.data);
                navigate("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="authentication">
            <div className="authentication-form card p-3">
                <h1 className="card-title">Welcome Back</h1>
                <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
                    <Form.Item label="Email" name="email">
                        <Controller name="email" control={control} render={({ field }) => <Input type="email" placeholder="Email"  {...field} />}/>
                        {errors.email && <div className="ant-form-item-explain-error">{errors.email}</div>}
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Controller name="password" control={control} render={({ field }) => <Input type="password" placeholder="Password"  {...field} />}/>
                        {errors.password && <div className="ant-form-item-explain-error">{errors.password}</div>}
                    </Form.Item>


                    <Button className="primary-button my-2 full-width-button" htmlType="submit">
                        LOGIN
                    </Button>

                    <Link to="/register" className="anchor mt-2">
                        CLICK HERE TO REGISTER
                    </Link>

                </Form>
            </div>
        </div>
    )
}
export default Login
