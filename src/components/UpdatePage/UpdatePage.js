import React, { PureComponent } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm'

class Update extends PureComponent {
    render() {
        // Retrieve the object from storage
        const retrievedObject = localStorage.getItem('formValues');
        const formValues = JSON.parse(retrievedObject);
        return (
            <div className="Update">
                <RegisterForm
                    formValues={formValues || {}}
                    action='Update'
                />
            </div>
        );
    }
}

export default Update;
