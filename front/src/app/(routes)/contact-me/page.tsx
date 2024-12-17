import Container from '@/components/container';
import TransitionPage from '@/components/transition-page';
import ContactMe from '@/components/contact-me';
import Image from 'next/image';
import React from 'react';

const ContactMePage: React.FC = () => {
    return (
        <>
        <TransitionPage />  
         <Container>
            <ContactMe/>
            <div className="flex justify-center mt-8">
             <Image 
                src="/image-1.jpg"
                alt="Contact Me"
                width={800}
                height={400} 
                className='hidden'/>
            </div>
         </Container>
        </>
    );
};

export default ContactMePage;