import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const defaultImagePath = '/images/default-picture.jpeg';

type ProfilePictureProps = {
  imagePath: string;
  alt: string;
};

const ProfilePicture = ({ imagePath, alt }: ProfilePictureProps) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch(imagePath)
      .then((res) => {
        if (res.ok) {
          setImageSrc(imagePath);
        } else {
          setImageSrc(defaultImagePath);
        }
      })
      .catch(() => setImageSrc(defaultImagePath));
  }, [imagePath]);

  return (
    <Image src={imageSrc} alt={alt} width={48} height={48} draggable={false} />
  );
};

export default ProfilePicture;
