import React, {useState} from "react";
export default intialValue => {
    const [showSuccessMessage,setShowSuccessMessage] = useState(false);
    const [values,setValues] = useState(intialValue);
    return {
        showSuccessMessage,
        values,
        handleChanges: (e) => {
            setValues({...values,[e.target.name]: e.target.value });
        },
        handleSubmit: (e) => {
            e.preventDefault();
            setShowSuccessMessage(true);
          }
    }
}

