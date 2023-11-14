import "./widgetLg.css"
import React from 'react'

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://yt3.ggpht.com/yti/ADpuP3PuOgW49IkTWLaUzM9HM6go-epj5eXKZMkNw1_EvQ=s88-c-k-c0x00ffffff-no-rj" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sarika Rajpure</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://yt3.ggpht.com/yti/ADpuP3PuOgW49IkTWLaUzM9HM6go-epj5eXKZMkNw1_EvQ=s88-c-k-c0x00ffffff-no-rj" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sarika Rajpure</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://yt3.ggpht.com/yti/ADpuP3PuOgW49IkTWLaUzM9HM6go-epj5eXKZMkNw1_EvQ=s88-c-k-c0x00ffffff-no-rj" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sarika Rajpure</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://yt3.ggpht.com/yti/ADpuP3PuOgW49IkTWLaUzM9HM6go-epj5eXKZMkNw1_EvQ=s88-c-k-c0x00ffffff-no-rj" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sarika Rajpure</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
