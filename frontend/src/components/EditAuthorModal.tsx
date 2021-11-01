import { Modal, Button } from 'antd';
import React, { useState, useEffect } from "react";

const EditAuthorModal = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
    
    return (
        <>
            < Modal
            title={ props.title }
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            />
        </>
    )
}

export default EditAuthorModal