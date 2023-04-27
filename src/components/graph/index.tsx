import Chart from "react-apexcharts";


type GraphProps = {
    id: string
    type: any
    data: number
    startColor: string
    endColor: string
    unity: string
}

export function Graph(props: GraphProps): JSX.Element {
    const options = {
        chart: {
            id: props.id
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#333",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#333',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        color: "#fafafa",
                        fontSize: '22px',
                        formatter: function(val: string) {
                            return Number(val).toFixed(1) + " " + props.unity ;
                        },
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: "dark",
                type: "horizontal",
                colorStops: [
                    {
                        offset: 0,
                        color: props.startColor,
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: props.endColor,
                        opacity: 1
                    }
                ]
            },
        },
        labels: ['Average Results'],
    };

    return (
        <Chart
            width="500"
            type={props.type}
            series={[props.data]}
            options={options}
        />
    );
}