
import { Grid, Paper, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import chartimgrate from "../assets/chartimgrate.jpg"
import chartimgboy from "../assets/chartimgboy.jpg"
import chartimgcalender from "../assets/chartimgcalender.jpg"
import React, {useState, useEffect} from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const data = [
    {
        name: "1",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "2",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "3",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "4",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "5",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "6",
        uv: 1390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "7",
        uv: 2490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "8",
        uv: 1290,
        pv: 3800,
        amt: 2500
    },
    {
        name: "9",
        uv: 1590,
        pv: 3800,
        amt: 2500
    },
    {
        name: "10",
        uv: 1810,
        pv: 3800,
        amt: 2500
    },
    {
        name: "11",
        uv: 1890,
        pv: 3800,
        amt: 2500
    },
    {
        name: "12",
        uv: 2200,
        pv: 3800,
        amt: 2500
    },
    {
        name: "13",
        uv: 1240,
        pv: 3800,
        amt: 2500
    },
    {
        name: "14",
        uv: 1930,
        pv: 3800,
        amt: 2500
    },
    {
        name: "15",
        uv: 1790,
        pv: 3800,
        amt: 2500
    },
    {
        name: "16",
        uv: 1690,
        pv: 3800,
        amt: 2500
    },
    {
        name: "17",
        uv: 1250,
        pv: 3800,
        amt: 2500
    },
    {
        name: "18",
        uv: 1390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "19",
        uv: 940,
        pv: 3800,
        amt: 2500
    },
    {
        name: "20",
        uv: 1590,
        pv: 3800,
        amt: 2500
    },
    {
        name: "21",
        uv: 2190,
        pv: 3800,
        amt: 2500
    },
    {
        name: "22",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "23",
        uv: 1290,
        pv: 3800,
        amt: 2500
    },
    {
        name: "24",
        uv: 2090,
        pv: 3800,
        amt: 2500
    },
    {
        name: "25",
        uv: 1090,
        pv: 3800,
        amt: 2500
    },
    {
        name: "26",
        uv: 2200,
        pv: 3800,
        amt: 2500
    },
    {
        name: "27",
        uv: 2350,
        pv: 3800,
        amt: 2500
    },
];

const Chart: React.FC = () => {

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <>

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: '40px 10px',

            }}>

                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item md={9} sm={6} xs={12} >
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        
                                <BarChart

                                      
                                    width={width}
                                    height={320}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" width={2} />
                                    <YAxis />
                                    <Tooltip />


                                    <Bar dataKey="uv" fill="#E7A356"  />
                                </BarChart>
                                
                        </Box>
                    </Grid>

                    <Grid container  sx={{ display: "flex", justifyContent: "center" }}>
                        
                            <Grid item md={4} sm={6} xs={12}>

                                <img style={{ width: "100%" }} src={chartimgrate} alt="chartimgrate" />

                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>

                                <img style={{ width: "100%" }} src={chartimgboy} alt="chartimgboy" />

                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>

                                <img style={{ width: "100%" }} src={chartimgcalender} alt="chartimgcalender" />

                            </Grid>
                        
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Chart;