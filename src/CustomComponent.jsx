/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */

import * as React from 'react';

React.forwardRef(({ className, children }, ref) => {
    return React.createElement('div', { ref: ref, className: className }, children);
});
