import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'
// //import { DocsLink } from 'src/reusable'

import ordersData from '../order_details/OrderData.js'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['customer', 'created', 'gateway', 'total', 'status', 'action']

const Tables = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              List of Orders <label>(to be shipped)</label>
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
                          <CButton color="success" size="sm">Scan</CButton>
                        </CCol>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
