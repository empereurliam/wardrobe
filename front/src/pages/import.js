import React, { useState } from "react";
import axios from "axios";

const url = "http://assets.stickpng.com/images/580b57fbd9996e24bc43bf36.png";

const Import = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <body>
      <h1>Upload your clothes</h1>
      <label from="url">Image URL : </label>
      <input
        type="text"
        id="url_image"
        /*type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}*/
      />
      <img src={url} alt="Not found" />
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button
            onClick={() =>
              console.log("test" + URL.createObjectURL(selectedImage))
            }
          >
            LOG
          </button>
          <br />
          <br />
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
    </body>
  );

  function post() {
    var price = document.getElementById("price").value;
    var brand = document.getElementById("brand").value;
    var type = document.getElementById("type").value;
    var photo = URL.createObjectURL(selectedImage);
    var obj = new Object();
    obj.brand = brand;
    obj.photo = photo;
    obj.price = price;
    obj.type = type;
    var jsonString = JSON.stringify(obj);
    console.log(jsonString);
    const options = {
      method: "POST",
      url: "http://localhost:8080/api/clothes",
      headers: { "Content-Type": "application/json" },
      data: jsonString,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    window.location.href = "/import";
  }
};

export default Import;
