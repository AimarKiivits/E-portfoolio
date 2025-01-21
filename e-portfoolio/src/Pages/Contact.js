import React from "react";

const Contact = () => {
    return (
        <div class="contact">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <p>If you'd like to get in touch, please feel free to contact me through any of the following methods:</p>
            <div class="contact-info">
                <div class="contact-info-item">
                    <img src="email logo.webp" alt="email logo" />
                    <p><strong>Email:</strong> Aimarkiivits1@gmail.com</p>
                </div>
                <div class="contact-info-item">
                    <img src="telephone_logo.webp" alt="phone logo" />
                    <p><strong>Phone:</strong> +372 5625 4513</p>
                </div>
            </div>
            <div class="contact-info">
                <div class="contact-info-item">
                    <img src="discord logo.png" alt="discord logo" />
                    <p><strong>Discord:</strong> Knack345</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;