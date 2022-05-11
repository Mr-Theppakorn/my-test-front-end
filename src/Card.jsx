import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

const Card = ({ widths, heights }) => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });


    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: widths + "px", height: heights + "px", backgroundColor: "crimson", borderRadius: "3px" }} alt="preview" onLoad={() => { URL.revokeObjectURL(file.preview) }} />
            </div>
        </div>
    ))

    return (
        <div >
            <div {...getRootProps()} style={{ width: widths + "px", height: heights + "px", backgroundColor: "crimson", borderRadius: "6px", margin: "10px" }}>
                <input {...getInputProps()} />
                {images}
            </div>
        </div>
    )
}

export default Card