import { Modal, Button } from 'antd';
import React, { useState, useEffect } from "react";

const EditBookModal = (props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    
    return (
        <>
            < Modal
            title={ props.title }
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Edit Book"
            />
        </>
    )
}

export default EditBookModal