import React from 'react';

const About = React.forwardRef((props, ref) => (
    <div ref={ref} style={{ height: '100vh', paddingTop: '80px' }}>
        <h2>About</h2>
    </div>
));

export default About;
