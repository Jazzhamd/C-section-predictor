import React from 'react';

const Testimonial = React.forwardRef((props, ref) => (
    <div ref={ref} style={{ height: '100vh', paddingTop: '80px' }}>
        <h2>Testimonial</h2>
    </div>
));

export default Testimonial;
