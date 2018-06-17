import React, { Component } from 'react'
import { ref } from '../../config/constants'
import SocietyList from './SocietyList'
import cookie from "react-cookies";
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

        this.ref.on('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                var childKey =childSnapshot.key;
                childData.key = childKey;
                try {
                    const token = cookie.load("token");
                    let fs = childData.followers
                    let ks = Object.keys(fs)
                    childData.followed = false
                    ks.forEach( ele => {
                        console.log(fs[ele] )
                       if ( fs[ele].token === token) {
                        childData.followed = true
                        childData.followkey = ele
                       }
                    })
                }catch(err) {
                    console.log(err)
                    childData.followed = false
                }


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