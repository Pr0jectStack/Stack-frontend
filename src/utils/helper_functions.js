import default_image from "./default_image.jpg";

export const convertBufferToImage = (bufferImage) => {
  // Change buffer to base 64
  const bufferToBase64 = (data) => {
    let binary = "";
    let bytes = new Uint8Array(data);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // Convert the base64 String to image.
  let convertedImage = bufferImage
    ? `data:${bufferImage.contentType};base64,${bufferToBase64(
        bufferImage.data.data
      )}`
    : default_image;
  return convertedImage;
};
