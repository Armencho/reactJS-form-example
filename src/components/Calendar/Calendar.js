import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

class Calendar extends PureComponent {

    render(){
        return (
            <DatePicker defaultValue={moment('2018/01/10', dateFormat)} format={dateFormat} onChange={this.props.onChange}/>
        );
    }
}
//console.log(moment("20120620", "YYYYMMDD").fromNow())
export  default  Calendar;