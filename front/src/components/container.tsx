

import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children } = props;
    return (
        <div className='w-full max-w-6xl px-4 pv-40
        mx-auto md:pb-0 md:px-6 mt-40'>
            {children}
        </div>
    );
}

export default Container