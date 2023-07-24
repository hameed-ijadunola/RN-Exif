import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = () => {
  const [res, setRes] = useState('');
  const launchCam = (output) => {
    launchCamera(
      {
        mediaType: 'mixed',
        includeBase64: false,
        allowsEditing: true,
        maxWidth: 8000,
        maxHeight: 8000,
      },
      (response) => {
        if (!response?.didCancel) {
          const { type, uri } = response?.assets[0];
          console.log(response);
          setRes(response);
        }
      }
    );
  };
  const launchImage = (output) => {
    launchImageLibrary(
      {
        mediaType: 'mixed',
        includeBase64: false,
        maxWidth: 8000,
        maxHeight: 8000,
      },
      (response) => {
        if (!response?.didCancel) {
          const { type, uri } = response?.assets[0];
          console.log(response);
          setRes(response);
        }
      }
    );
  };

  const selectImage = () => {
    var ImagePicker1 = require('react-native-image-picker');
    var options = {
      quality: 1,
      mediaType: 'photo',
      cameraType: 'back',
      allowsEditing: true,
      noData: true,
      maxWidth: 8000,
      maxHeight: 8000,
    };

    ImagePicker1.showImagePicker((response) => {
      console.log('response: ', response);
      console.log('response latitude: ', response.latitude);
      console.log('response longitude: ', response.longitude);
    });
    // ImagePicker.showImagePicker(
    //   {
    //     quality: 1,
    //     mediaType: 'photo',
    //     cameraType: 'back',
    //     allowsEditing: true,
    //     noData: true,
    //     maxWidth: 8000,
    //     maxHeight: 8000,
    //   },
    //   (response) => {
    //     console.log(response);
    // if (response.didCancel) {
    //   console.log('User cancelled image picker');
    // } else if (response.error) {
    //   console.log('ImagePicker Error: ', response.error);
    // } else if (response.customButton) {
    //   console.log('User tapped custom button: ', response.customButton);
    // } else {
    //   const source = { uri: response.uri };
    //   // Do something with the selected image
    // }
    // }
    // );
  };

  return (
    <View
      style={{
        paddingTop: 15,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text
        onPress={launchCam}
        style={[
          {
            padding: 3,
            borderRadius: 3,
            marginBottom: 50,
            alignSelf: 'center',
          },
        ]}
      >
        {'Take photo'}
      </Text>
      <Text
        onPress={launchImage}
        style={[
          {
            padding: 3,
            borderRadius: 3,
            alignSelf: 'center',
            marginBottom: 50,
          },
        ]}
      >
        {'Select photo'}
      </Text>
      <Text>{JSON.stringify(res)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImagePicker;
