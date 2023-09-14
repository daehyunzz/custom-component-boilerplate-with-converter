/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-void */
/* eslint-disable camelcase */

import * as React from 'react';
import * as chart_js_4_3_3 from 'chart.js';

const CustomComponent: React.FC<any> = React.forwardRef<any, any>(
    (
        {
            className,
            type,
            labels,
            label,
            data,
            backgroundColor,
            borderColor,
            borderWidth,
            chartWidth,
            chartHeight,
            fontSize,
            children,
        },
        ref
    ) => {
        const [canvas, setCanvas] = React.useState<HTMLCanvasElement>();
        const canvasRef = React.useRef(canvas);

        chart_js_4_3_3.Chart.register(...chart_js_4_3_3.registerables);

        React.useEffect(() => {
            if (ref !== null && ref !== void 0) {
                const canvasElement = document.createElement('canvas');
                canvasElement.width = chartWidth;
                canvasElement.height = chartHeight;
                setCanvas(canvasElement);
                var myChart = new chart_js_4_3_3.Chart(canvasElement, {
                    type: type,
                    data: {
                        labels: labels.value,
                        datasets: [
                            {
                                label: label,
                                data: data.value,
                                backgroundColor: backgroundColor.value,
                                borderColor: borderColor.value,
                                borderWidth: borderWidth,
                            },
                        ],
                    },
                    options: {
                        responsive: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                            x: {
                                ticks: {
                                    font: {
                                        size: fontSize,
                                    },
                                },
                            },
                            y: {
                                ticks: {
                                    font: {
                                        size: fontSize,
                                    },
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    // This more specific font property overrides the global property
                                    font: {
                                        size: fontSize,
                                    },
                                },
                            },
                        },
                    },
                });
                if (typeof ref !== 'function') {
                    ref.current.appendChild(canvasElement);
                }
            }
        }, [
            ref,
            type,
            labels,
            label,
            data,
            backgroundColor,
            borderColor,
            borderWidth,
            chartWidth,
            chartHeight,
            fontSize,
        ]);

        React.useEffect(() => {
            if (canvasRef.current) {
                canvasRef.current.remove();
            }
            canvasRef.current = canvas;
        }, [canvas]);

        return (
            <div className={className} ref={ref}>
                {children}
            </div>
        );
    }
);

export default CustomComponent;
