import React, { useState } from 'react';
import TextError from './TextError';

const ImgUpload = (props) => {
  const [error, setError] = useState({
    error: '',
  });

  const handleChange = (e) => {
    if (e.target.files.length === 0) return;

    const img = e.target.files[0];

    const { type, size } = img;

    if (!/image\/.+/g.test(type)) {
      setError({ error: 'image type should be image/*' });
      return;
    }

    if (!(size > 2000 && size < 10000)) {
      setError({ error: 'image size should be between 2k to 10K' });
      return;
    }

    handleImgUpload(img);
  };

  const handleImgUpload = (img) => {
    const data = new FormData();

    data.append('file', img);
    data.append('upload_preset', 'quikieapps');

    fetch('https://api.cloudinary.com/v1_1/dqhskqqa6/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setError({ error: ' ' });
        props.form.setFieldValue('userImg', data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-6">
      <input
        className="w-full  outline-none border-2 border-gray-900 focus:border-indigo-500 p-2 mb-2 rounded-md cursor-pointer"
        type="file"
        name="userImg"
        accept="image/*"
        onChange={handleChange}
        onBlur={props.field.onBlur}
      />
      {props.meta.touched && (
        <TextError>{error.error || props.meta.error}</TextError>
      )}
    </div>
  );
};

export default ImgUpload;
