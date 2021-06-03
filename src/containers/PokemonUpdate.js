import React, { useState, useEffect } from 'react'
//import { useDropzone } from 'react-dropzone';
import { Form, FormGroup, Input, Label } from 'reactstrap'

import Header from '../components/Header'

import IdolImage from '../assets/images/img-idol-1.png'
import Back from '../assets/images/icon-left-arrow-two.svg'
import Camera from '../assets/images/icon-camera.svg'
import Eye from '../assets/images/eye-show.svg'

const PokemonUpdate = () => {
  const [files, setFiles] = useState([]);
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: 'image/*',
  //   onDrop: acceptedFiles => {
  //     setFiles(acceptedFiles.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file)
  //     })));
  //   }
  // });

  const thumbs = files.map(file => (
    <img
      src={file.preview}
      className="round-image"
      alt="fameo-user"
    />
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  function showhidekatasandi() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("show-hide-kata-sandi").style.filter = "invert(1)";
    } else {
      x.type = "password";
      document.getElementById("show-hide-kata-sandi").style.filter = "";
    }
  }

  return (
    <div className="profile-update-wrapper">
    <Header content={{ title: 'My Pokemon', BtnLeftIcon: Back, BtnRightText: 'Simpan' }} />
      <div className="after-heading-wrapper">
        <div className="container">
          <div className="profile-image-wrapper">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" className="fameo-upload" alt="fameo-upload" />
            {/* {files.length === 0 ? <img src={IdolImage} className="round-image" alt="fameo-profile" /> : thumbs}
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className="dropzone-data">
                <img src={Camera} className="fameo-upload" alt="fameo-upload" />
              </div>
            </div> */}
          </div>
          <div className="update-form-wrapper">
            <Form>
              <FormGroup>
                <Label for="first-name" className="title-textbox">Pokemon Name</Label>
                <Input type="text" name="first-name" id="first-name" className="textbox" placeholder="John" />
              </FormGroup>
              <FormGroup>
                <Label for="last-name" className="title-textbox">Pokemon NickName</Label>
                <Input type="text" name="last-name" id="last-name" className="textbox" placeholder="Doe" />
              </FormGroup>
             
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonUpdate