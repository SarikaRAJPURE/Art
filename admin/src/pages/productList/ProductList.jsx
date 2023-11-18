import "./productList.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from "../../dummyData"
const ProductList = () => {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (<div className="productListItem">
                    <img src={params.row.img} alt="user" className="productListImg" />
                    {params.row.name}
                </div>)
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline
                            onClick={() => handleDelete(params.row.id)}
                            className="productListDelete" />
                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
            <DataGrid
                disableRowSelectionOnClick //to disable the
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
