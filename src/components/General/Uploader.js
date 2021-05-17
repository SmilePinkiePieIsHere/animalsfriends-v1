import React from 'react';
import ImageUploader from 'react-images-upload';
 
class Uploader extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    getBase64 = (file) => {  
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
 
    onDrop(picture) {       
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        debugger
        var result;
        if (picture[0] instanceof Blob) {
             result = this.getBase64(picture[0]);
          } 
        console.log(result);
        debugger
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
        );
    }
}

export default Uploader;