import * as yup from "yup"
import { toJpeg } from "html-to-image"

export const sendEmail = async (data, certificateRef) => {
    toJpeg(certificateRef.current, { quality: 0.95 })
        .then(function (dataUrl) {

            fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Your Name',
                    emailTo: data.email,
                    message: 'Here is your certificate',
                    image: dataUrl,
                }),
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
}
export const validationForm = (input) => {
    return yup.object({
        email: yup.string().email(input.email).required(input.required).matches(/\.+/, input.symbol),
    }).required()
}
