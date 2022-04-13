import {useState} from "react";
import axios from "axios";

class Selection extends Component {

    fetchHats = () => {
        axios
            .get("http://localhost:8080/api/clothes/HAT")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    state = {
        hats_list : [...this.fetchHats.map( hat => { return { ...hat, selected : false}})]
    }

    renderHat = (hat, idx) => {
        return <div className="col-md-3" style={{marginTop: '20px', cursor: 'pointer'}}>
            <Card>
                <CardBody>
                    <p className=""><img src={}/></p>
                </CardBody>
            </Card>
        </div>
    }

}