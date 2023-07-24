import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import piexif from 'piexifjs';

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = () => {
    launchCamera(
      {
        mediaType: 'mixed',
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error:', response.error);
        } else {
          // Set the captured image URI in the state
          setImageUri(response.uri);

          // Inspect EXIF data
          if (response.type === 'image/jpeg' && response.data) {
            const exifData = piexif.load(response.data);
            console.log('EXIF Data:', exifData);
            // You can now access specific EXIF attributes if needed
            // For example, to get the image orientation:
            const orientation = exifData['0th'][piexif.ImageIFD.Orientation];
            console.log('Image Orientation:', orientation);
          } else {
            console.log('Image format not supported or no EXIF data');
          }
        }
      }
    );
  };

  return (
    <View>
      <Button title="Capture Image" onPress={handleImagePicker} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default App;
