import React, { useEffect, useState } from 'react'
import { Button, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Basic.css'

const { Option } = Select;


const options = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
    },
];

const validateScheme = {
    required: '${label} is required',
    types: {
        email: '${label} is not a valid email',
        number: '${label} is not a valid number',
    },
    number: {
        range: '${label} should be between ${min} and ${max}'
    }
}

const formAttr = {
    // labelCol: { span: 8 },
    // wrapperCol: { span: 16 },
    // style: { maxWidth: 600 },
    initialValues: { remember: true }
}

const BasicFrom = () => {
    const [form] = Form.useForm();

    const formValues = { 'nameValue': Form.useWatch('username', form) }

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        setFruits(['Apple', 'Pear'])
    }, [])

    const onFinish = (value) => {
        console.log("success:- ", value);
    };

    const onFinishFailed = (error) => {
        console.log("failed:- ", error);
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };


    return (
        <>
            <Container fluid>
                <Form name="basic" form={form} {...formAttr} onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateScheme}>
                    <><h3 className='text-danger my-3'>Note: To use custom Icons: install [{`npm install --save @ant-design/icons `}] and review what icon you want to use <a href="https://ant.design/components/icon" target="_blank">here</a></h3></>

                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Normal Text</h5>
                        <Col md={6} className="py-3">
                            {/* normal text */}
                            <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true, message: 'Please input your username!' }]}><Input /></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`<Form.Item name={['user', 'username']} label="Username" 
    rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
    </Form.Item>`}
                            </code></pre>
                        </Col>
                    </Row>

                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Password with regex validation</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {` <Form.Item name="password" label="Password" 
    rules={[
        { required: true, message: 'Please input your password!' }, 
        { pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, message: 'Please enter alphanumeric password' }
    ]}>
        <Input.Password prefix={<LockOutlined />} />
    </Form.Item>
                            `}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            {/* password */}
                            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }, { pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, message: 'Please enter alphanumeric password' }]}><Input.Password prefix={<LockOutlined />} /></Form.Item>
                        </Col>

                    </Row>

                    {/* Normal Select */}

                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Normal Select</h5>
                        <Col md={6} className="py-3">
                            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                                <Select placeholder="Select gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`   
    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}> 
        <Select placeholder="Select gender">        
            <Option value="male">Male</Option>    
            <Option value="female">Female</Option>
        </Select>
    </Form.Item>`}
                            </code></pre>
                        </Col>

                    </Row>



                    {/* Multiple Select */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Multiple Select</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`<Form.Item name='select-multiple' label="Select[multiple]" rules={[{ type: 'array' }]}>
    <Select mode="multiple" placeholder="Please select favourite colors">
        <Option value="green">Green</Option>
        <Option value="red">Red</Option>
        <Option value="black">Black</Option>
    </Select>
</Form.Item>`}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item name='select-multiple' label="Select[multiple]" rules={[{ type: 'array' }]}>
                                <Select mode="multiple" placeholder="Please select favourite colors">
                                    <Option value="green">Green</Option>
                                    <Option value="red">Red</Option>
                                    <Option value="black">Black</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>


                    {/* Nickname with tooltip */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Nickname with tooltip</h5>
                        <Col md={6} className="py-3">
                            <Form.Item name="nickname" label="Nickname" tooltip="What do you want others to call you?" rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}><Input /></Form.Item>

                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item name="nickname" label="Nickname" tooltip="What do you want others to call you?" 
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}>
            <Input />
    </Form.Item>`}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Tree Select : hierarchy options in select tag */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'><b>Tree Select :</b> hierarchy options in select tag</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="TreeSelect" name="treeselect">
        <TreeSelect treeData={[
            { title: 'Light', value: 'light', children: [
                { title: 'Bamboo', value: 'bamboo', children: [
                    { title: "Leaves", value: 'leaves' }] }, 

                { title: "Ashoka", value: 'ashoka' }] },

            { title: 'Water', value: 'water', children: [
                { title: 'Kinley', value: 'kinley' }, 
                { title: "Bislery", value: 'bislery' }
            ] },
        ]} />
    </Form.Item>
                            `}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item label="TreeSelect" name="treeselect">
                                <TreeSelect treeData={[
                                    { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo', children: [{ title: "Leaves", value: 'leaves' }] }, { title: "Ashoka", value: 'ashoka' }] },
                                    { title: 'Water', value: 'water', children: [{ title: 'Kinley', value: 'kinley' }, { title: "Bislery", value: 'bislery' }] },
                                ]} />
                            </Form.Item>
                        </Col>
                    </Row>


                    {/* Cascadar Select : hierarchy same as tree select but with '/' : Light/Bamboo/Leaves */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'><b>Cascadar Select :</b> hierarchy same as tree select but with '/' : Light/Bamboo/Leaves</h5>
                        <Col md={6} className="py-3">
                            <Form.Item label="Cascadar" name="cascadar">
                                <Cascader options={[
                                    { label: 'Light', value: 'light', children: [{ label: 'Bamboo', value: 'bamboo', children: [{ label: "Leaves", value: 'leaves' }] }, { label: "Ashoka", value: 'ashoka' }] },
                                    { label: 'Water', value: 'water', children: [{ label: 'Kinley', value: 'kinley' }, { label: "Bislery", value: 'bislery' }] },
                                ]} placeholder="Please select" />
                            </Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Cascadar" name="cascadar">
        <Cascader options={[
            { label: 'Light', value: 'light', children: [
                { label: 'Bamboo', value: 'bamboo', children: [
                    { label: "Leaves", value: 'leaves' }] }, 
                { label: "Ashoka", value: 'ashoka' }] },


            { label: 'Water', value: 'water', children: [
                { label: 'Kinley', value: 'kinley' }, 
                { label: "Bislery", value: 'bislery' }] },
        ]} placeholder="Please select" />
    </Form.Item>
                                `}
                            </code></pre>
                        </Col>

                    </Row>


                    {/* Radio Button */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Radio Button</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
<Form.Item label="Status" name="status" rule={[{ required: true }]}>
    <Radio.Group>
        <Radio.Button value="married">Married</Radio.Button>
        <Radio.Button value="single">Single</Radio.Button>
        <Radio.Button value="divorced">Divorced</Radio.Button>
    </Radio.Group>
</Form.Item>
                            `}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item label="Status" name="status" rule={[{ required: true }]}>
                                <Radio.Group>
                                    <Radio.Button value="married">Married</Radio.Button>
                                    <Radio.Button value="single">Single</Radio.Button>
                                    <Radio.Button value="divorced">Divorced</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>


                    {/* Selecting single date */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Selecting single date only</h5>
                        <Col md={6} className="py-3">
                            <Form.Item label="Single Date" name="singleData" wrapperCol={{ span: 8 }}><DatePicker /></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Single Date" name="singleData" wrapperCol={{ span: 8 }}>
        <DatePicker />
    </Form.Item>
                    `}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Selecting date in Range */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Select Date with range</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Rangee Date" name="rangeData">
        <DatePicker.RangePicker />
    </Form.Item>`}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item label="Rangee Date" name="rangeData"><DatePicker.RangePicker /></Form.Item>
                        </Col>
                    </Row>



                    {/* Getting Number Input */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Getting Number Input</h5>
                        <Col md={6} className="py-3">
                            <Form.Item label="Number" name={['user', 'age']} rules={[{ type: 'number', min: 0, max: 10 }]}><InputNumber /></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Number" name={['user', 'age']} rules={[{ type: 'number', min: 0, max: 10 }]}>
        <InputNumber />
    </Form.Item>
                    `}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Switch checkbox */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Switch checkbox</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Switch" valuePropName="checked">
        <Switch />
    </Form.Item>`}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item label="Switch" valuePropName="checked"><Switch /></Form.Item>
                        </Col>
                    </Row>


                    {/* Upload picture */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Upload picture</h5>
                        <Col md={6} className="py-3">
                            <Form.Item label="Upload Picture" name="upload"><Upload listType='pictureCard'><div>Add<div>Upload</div></div></Upload></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item label="Upload Picture" name="upload">
        <Upload listType='pictureCard'>
            <div>Add or /* ICON */
                <div>Upload</div>
            </div>
        </Upload>
    </Form.Item>
                    `}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Getting URL with validation */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Getting URL with validation</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {''}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item name="url" label="URL" rules={[{ type: 'url', warningOnly: true, }, { type: 'string', min: 6, }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>


                    {/* Single Checkbox */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Single Checkbox to return True or False</h5>
                        <Col md={6} className="py-3">
                            <Form.Item wrapperCol={{ span: 21 }} name="remember" valuePropName="checked"><Checkbox>Remember me</Checkbox></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item wrapperCol={{ span: 21 }} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
    </Form.Item>                            
                            `}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Multiple Checkbox */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Multiple Checkbox</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`                            
    <Form.Item wrapperCol={{ span: 21 }} name="fruits" valuePropName="checked" label="multiple">
        <Checkbox.Group options={options} value={fruits} onChange={onChange} />
    </Form.Item>`}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item wrapperCol={{ span: 21 }} name="fruits" valuePropName="checked" label="multiple"><Checkbox.Group options={options} value={fruits} onChange={onChange} /></Form.Item>
                        </Col>
                    </Row>

                    {/* Slider */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Slider</h5>
                        <Col md={6} className="py-3">
                            <Form.Item name="slider" label="Slider"><Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} /></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item name="slider" label="Slider">
        <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
    </Form.Item>
                    `}
                            </code></pre>
                        </Col>

                    </Row>

                    {/* Rating */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Rating with yellow star</h5>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item name="rate" label="Rate">
        <Rate />
    </Form.Item>`}
                            </code></pre>
                        </Col>
                        <Col md={6} className="py-3">
                            <Form.Item name="rate" label="Rate"><Rate /></Form.Item>

                        </Col>
                    </Row>



                    {/* Submit Button which wont work without htmlType */}
                    <Row className='border border-3 border-start-0 border-end-0 border-secondary-subtle my-3'>
                        <h5 className='my-3'>Submit Button which wont work without htmlType</h5>
                        <Col md={6} className="py-3">
                            <Form.Item wrapperCol={{ span: 24, offset: 8 }}><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
                        </Col>
                        <Col md={6} className="bg-body-secondary py-3">
                            <pre className='pre-class' tabIndex={0}><code className='code-class'>
                                {`
    <Form.Item wrapperCol={{ span: 24, offset: 8 }}>
        <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>`}
                            </code></pre>
                        </Col>

                    </Row>

                </Form>
            </Container>
            <div><h3>use watch</h3>
                <p>{formValues['nameValue']}</p></div>
        </>
    )
}

export default BasicFrom