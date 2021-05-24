import React from 'react';
import ImageUploader from 'react-images-upload';

import AnimalContext from "./AnimalContext";

class Uploader extends React.Component {

    constructor(props) {
        super(props);       
        this.onDrop = this.onDrop.bind(this);
    }

    getBase64 = (file) => {
        let thisContext = this.context;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            thisContext.image = reader.result;
            thisContext.uploading(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    onDrop(picture) {  
        if (picture[0] instanceof Blob) {
            this.getBase64(picture[0]);
        }
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Качи снимка'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
            />
        );
    }
}

Uploader.contextType = AnimalContext;

export default Uploader;