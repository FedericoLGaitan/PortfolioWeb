

import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children } = props;
    return (
        <div className='flex  gap-4 flex-col md:items-center
        md:justify-center lg:gap-6 w-full h-full px-4 pb-40
        mx-auto md:pb-0 md:px-6 mt-24'>
            {children}
        </div>
    );
}

export default Container