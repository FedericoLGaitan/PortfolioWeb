import React from 'react';

const ContactMe: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Contact Me</h1>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactMe;