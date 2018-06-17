import React, { Component } from 'react'
import { ref } from '../../config/constants'
import SocietyList from './SocietyList'

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

class TagsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socities: []
        };

    }

    componentWillMount() {
        var _this = this
        this.ref = ref.child("/orgs")

        this.ref.once('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                items.push(childData);
            });

            _this.setState({
                socities: items
            });

        });
    }


    componentWillUnmount() {
        this.ref.off();

    }


    render() {
        return (
            <div>
   <ToastContainer />
                        <SocietyList socities={this.state.socities} />

            </div>
        )
    }
}

export default TagsPage