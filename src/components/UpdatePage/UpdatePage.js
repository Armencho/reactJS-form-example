import React, { PureComponent } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm'

class Update extends PureComponent {
    render() {
        // Retrieve the object from storage
        const retrievedObject = localStorage.getItem('formValues');
        const formValues = JSON.parse(retrievedObject);
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        return (
            <div className="Update">
                <RegisterForm
                    firstName={formValues.firstName}
                    lastName={formValues.lastName}
                    dob={formValues.DOB}
                    email={formValues.email}
                    country={formValues.country}
                    info={formValues.info}
                    genderValue={formValues.radioGroup}
                    sportCheckBoxes={formValues.sportCheckBoxes}
                    action='Update'
                />
            </div>
        );
    }
}

export default Update;
