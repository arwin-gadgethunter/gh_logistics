import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,

} from '@coreui/react'
//import { DocsLink } from 'src/reusable'

import ordersData from '../order_transaction/OrderData.js'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const getLabel = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['customer', 'created', 'rider', 'gateway', 'subtotal', 'discount', 'tax', 'total', 'label', 'status', 'action']
//const fields = ['name', 'registered', 'role', 'status']

const Tables = () => {

  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Sales Order History
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={ordersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{

                  'label':
                    (item) => (
                      <td>
                        <CBadge color={getLabel(item.label)}>
                          {item.label}
                        </CBadge>
                      </td>
                    ),

                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),

                  'action':
                    (item) => (
                      <td>
                        <CCol col="2" className="mb-3 mb-xl-0">
                          <CButton color="success" onClick={() => setSuccess(!success)} size="sm" className="mr-1">Edit</CButton>&nbsp;
                          <CButton color="secondary" size="sm">Status</CButton> &nbsp;
                          <CButton color="secondary" size="sm">Label</CButton> &nbsp;
                          <CButton color="warning" onClick={() => setWarning(!success)} size="sm" className="mr-1" size="sm">Delete</CButton>
                        </CCol>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={warning}
        onClose={() => setWarning(!warning)}
        color="warning"
      >
        <CModalHeader closeButton>
          <CModalTitle>Delete Order</CModalTitle>
        </CModalHeader>
        <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <h5>Are you sure you want to permanently delete this item?</h5>
              </CForm>

              </CModalBody>
        <CModalFooter>
          <CButton color="warning" onClick={() => setWarning(!warning)}>Proceed</CButton>{' '}
          <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}

export default Tables
