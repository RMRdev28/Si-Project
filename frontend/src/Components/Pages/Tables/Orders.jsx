import React, { useEffect, useRef } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const Orders = () => {
  const tableRef = useRef(null);

  const columns = [
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Client Names',
      selector: 'clientNames',
      sortable: true,
    },
    {
      name: 'Orders',
      selector: 'orders',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <a href="#" className="btn btn-primary">
          <i className="nav-icon fas fa-eye"></i>
        </a>
      ),
    },
  ];

  const data = [
    {
      date: '2020',
      clientNames: 'Win 95+',
      orders: '4',
    },
    {
      date: '2020',
      clientNames: 'Win 95+',
      orders: '5',
    },
  ];

  useEffect(() => {
    // You can perform additional setup here if needed
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">All Orders</h3>
                </div>
                <div className="card-body">
                  <DataTable
                    title="Orders"
                    columns={columns}
                    data={data}
                    pagination
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
