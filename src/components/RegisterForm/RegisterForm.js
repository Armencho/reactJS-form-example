import React, { PureComponent } from 'react';
import { Form,  Input, Radio, Select, Checkbox, Button } from 'antd';
import { withRouter } from "react-router-dom";

import './RegisterForm.css'
import Calendar from '../Calendar/Calendar'
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Basketball', 'Golf', 'Boxing', 'Swimming', 'Tennis', 'Volleyball'];

const dateFormat = 'YYYY/MM/DD';

class RegisterForm extends PureComponent{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // Put the object into storage
                localStorage.setItem('formValues', JSON.stringify(values));
                this.props.history.push('/update')
            }
        });
    }
    state = {
        indeterminate: true,
        dobCheck: 6570, //day 18 year
        oneDay: 24 * 60 * 60 * 1000,
        countries: [ 'Armenia', 'Albania', 'Algeria', 'Greece',
            'Austria', 'Bahamas', 'Bahrain', 'Colombia', 'Malta'
        ],
    };

    render(){
        const formValues = this.props.formValues;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        return  (
            <Form onSubmit={this.handleSubmit} className="login-form">

                <FormItem>
                    {getFieldDecorator('firstName', {
                        initialValue: formValues.firstName,
                        rules: [{ required: true, message: 'Please input your First Name!' }],
                    })(
                        <Input placeholder="First Name" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('lastName', {
                        initialValue: formValues.lastName,
                        rules: [{ required: true, message: 'Please input your Last Name!' }],
                    })(
                        <Input placeholder="Last Name" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('dob', {
                        initialValue: formValues.dob,
                        rules: [{required: true},
                            {
                                validator: (rule, value, callback) => {
                                    if(!value) {
                                        callback();
                                        return;
                                    }
                                    const { dobCheck, oneDay } = this.state;
                                    const date = new Date(value.format());
                                    const today = new Date();
                                    const diffDays = Math.round((today.getTime() - date.getTime()) / (oneDay));

                                    if (diffDays < dobCheck) {
                                        callback(true);
                                    }
                                    callback();
                                }, message: '18+',
                            }],
                    })(
                        <Calendar />
                    )}
                </FormItem>

                <FormItem
                    label="E-mail">
                    {getFieldDecorator('email', {
                        initialValue: formValues.email,
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('info', {
                        initialValue: formValues.info,
                        rules: [{required: true},
                            {
                                validator: (rule, value, callback) => {
                                    if(!value) {
                                        callback();
                                        return;
                                    }

                                    if (value.length <= 20) {
                                        callback(true);
                                    }
                                    callback();
                                }, message: 'Text area minimum 20 characters',
                            }],
                    })(
                        <TextArea placeholder="Text area minimum 20 characters" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('radioGroup',
                        {
                            initialValue: formValues.radioGroup
                        }
                    )(
                        <RadioGroup name="radiogroup">
                            <Radio value={1}>Male</Radio>
                            <Radio value={2}>Female</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem >
                    {getFieldDecorator('country',
                    {
                        initialValue: formValues.country
                    }
                    )(
                        <Select placeholder="Select a country">
                            {this.state.countries.map((country, index) => {
                                return <Option value={country} key={index}>{country}</Option>
                            })}
                        </Select>
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('sportCheckBoxes',
                        {
                            initialValue: formValues.sportCheckBoxes
                        })(
                        <CheckboxGroup
                            options={plainOptions}
                             />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {this.props.action}
                    </Button>
                </FormItem>

            </Form>
        );
    }
}
RegisterForm.defaultProps = {
    formValues: {}
}

const WrappedRegistrationForm = Form.create()(RegisterForm);
export  default  withRouter(WrappedRegistrationForm);

