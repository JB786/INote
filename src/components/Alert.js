import React from 'react'

const capitalize = (word) => {
    if(word === "danger"){
        word = "error";
    }
    // let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function Alert(props) {
    return (
        <div style={{ height: "50px" }}>
            {/* since we put the below content in div tag therefore we need to use {} for it to work because the below content is a JavaScipt and we cannot use it without {}     */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert" `}>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

// && operator is used for making the second statement null as well whenever first statement is null because if both conditions are satisfied only then && operator will return true.

// CLS(Cummulative Layout Shift) - Here whenever we see alert our content shift downwards this is called CLS. CLS is not good factor for SEO(search engine optimasations) due to this our website won't rank in google. Therefore, we can remove CLS here by giving height to our alert.