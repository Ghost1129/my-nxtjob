import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {

    const modules = {
        // syntax: true,
        toolbar: {
            container: "#toolbar",
            //id ="toorbar"는  그 위에 B I U S I V F P 이거 있는 곳이다. 
            handlers: {
                // insertImage: this.imageHandler,
                // insertVideo: this.videoHandler,
                // insertFile: this.fileHandler,
                // insertPoll: this.pollHandler,
            }
        },
    
    };
    
    const formats = [
        'bold', 'italic', 'underline', 'strike','uppercase',
        'image', 'video', 'file', 'link',"code-block", "video", "blockquote", "clean"
    ];
    
  return (
    <div>
        <div id="toolbar">
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <button className="ql-strike" />
                    <button className="ql-uppercase">
                        U
                    </button>
                    <button className="ql-insertImage">
                        I
                    </button>
                    <button className="ql-insertVideo">
                        V
                    </button>
                    <button className="ql-insertFile">
                        F
                    </button>
                    <button className="ql-link" />
                    <button className="ql-code-block" />
                    <button className="ql-video" />
                    <button className="ql-blockquote" />
                    <button className="ql-clean" />

                    

                </div>
        <ReactQuill modules={modules} formats={formats} theme="snow" />

    </div>
  )


}

export default QuillEditor