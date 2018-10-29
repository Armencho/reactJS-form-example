import React, {PureComponent} from 'react';
import RegisterForm from '../RegisterForm/RegisterForm'

class Create extends PureComponent {
    render() {
        return (
            <div className="Create">
                <RegisterForm
                    action='Create'
                />
            </div>
        );
    }
}

export default Create;
