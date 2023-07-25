import image from "../assets/login-image.png"; // Tell webpack this JS file uses this image

console.log(image); // /logo.84287d09.png

function LoginImage() {
    return <img src={ image } style={ { width: "15%" } } alt="Logo" />;
}

export default LoginImage;
