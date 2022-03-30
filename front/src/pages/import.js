import React, {useState} from "react";
import axios from "axios";

const Import = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h1>Upload your clothes</h1>
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={()=>setSelectedImage(null)}>Remove</button>
                    <button onClick={() => console.log("test"+URL.createObjectURL(selectedImage))}>LOG</button>
                    <br/><br/>
                    <form>
                        <label>
                            Price:
                            <input type="text" id="price" name="price" />
                        </label>
                        <label>
                            Brand:
                            <input type="text" id="brand" name="brand" />
                        </label>
                        <label>
                            Type:
                            <input type="text" id="type" name="type" />
                        </label>
                    </form>
                    <button onClick={post}>Submit</button>
                </div>
            )}
            <br />


            <br />
        </div>
    );

    function post() {
        var price = document.getElementById("price").value;
        var brand = document.getElementById("brand").value;
        var type = document.getElementById("type").value;
        var photo = URL.createObjectURL(selectedImage);
        var obj = new Object();
        obj.brand = brand;
        obj.photo = photo
        obj.price = price;
        obj.type = type;
        var jsonString= JSON.stringify(obj);
        console.log(jsonString);
        const options = {
            method: 'POST',
            url: 'http://localhost:8080/api/clothes',
            headers: {'Content-Type': 'application/json'},
            data: jsonString
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        window.location.href = '/import'
    }
};

export default Import;
