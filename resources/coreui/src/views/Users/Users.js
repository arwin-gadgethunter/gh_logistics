import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CForm,
  CFormText,
  CLabel,
  CInput,
  CFormGroup,
} from '@coreui/react'

import usersData from './UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const [removeitem, setRemove] = useState(false)
  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  
  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
   <>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
            <CButton color="primary" onClick={() => setAdd(!add)} size="sm" className="mr-1 float-right" size="sm">Add User</CButton>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'position_name', _classes: 'font-weight-bold' },
              'visible', 'created_at', 'updated_at'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            // onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'visible':
                (item)=>(
                  <td>
                    <CButton color="success" onClick={() => setEdit(!edit)} size="sm" className="mr-1">Edit</CButton>&nbsp;
                    <CButton color="warning" onClick={() => setRemove(!removeitem)} size="sm" className="mr-1" size="sm">Delete</CButton>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    /* ADD MODAL */
    <CModal
        show={add}
        onClose={() => setAdd(!add)}
        color="primary"
      >
        <CModalHeader closeButton>
          <CModalTitle>Add Position</CModalTitle>
        </CModalHeader>
        <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Position</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter Position" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
              </CForm>
              </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setWarning(!warning)}>Proceed</CButton>{' '}
          <CButton color="secondary" onClose={() => setAdd(!add)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

      /* EDIT MODAL */
      <CModal
        show={edit}
        onClose={() => setEdit(!edit)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Position</CModalTitle>
        </CModalHeader>
        <CModalBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Position</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter Position" />
                    <CFormText>This is a help text</CFormText>
                  </CCol>
                </CFormGroup>
              </CForm>
              </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => setEdit(!warning)}>Save Changes</CButton>{' '}
          <CButton color="secondary" onClose={() => setEdit(!edit)}>Cancel</CButton>
        </CModalFooter>
      </CModal>

      /* DELETE MODAL */
      <CModal
        show={removeitem}
        onClose={() => setRemove(!removeitem)}
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
          <CButton color="secondary" onClose={() => setWarning(!removeitem)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
      </>
  )
}

export default Users
