import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./home.css"
import React from 'react'
import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetlarge/WidgetLg"
import WidjetSm from "../../components/widgetsmall/WidgetSm"
console.log(userData);
const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid datakey="Active User" />
            <div className="homeWidget">
                <WidjetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
