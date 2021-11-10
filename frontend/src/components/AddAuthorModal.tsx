import { Modal, Button } from 'antd';
import React, { useState, useEffect } from "react";

const AddAuthorModal = (props : any) => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
    
    return (
        <>
            < Modal
            title={ props.title }
            visible={visible}
            confirmLoading={confirmLoading}
            />
        </>
    )
}

export default AddAuthorModal