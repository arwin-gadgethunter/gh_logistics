import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CRow,
  CCardHeader,
  CFormGroup,
  CFormText,
  CInputRadio,
  CLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="9" xl="12">
            <CCard className="p-4">
              <CCardHeader>
                <h1>Employee Registration</h1>
                <p className="text-muted">Create your account</p>
              </CCardHeader>
              <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                    <CCol xs="12" md="4">
                      <CLabel htmlFor="text-input">First Name</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="First Name" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="4">
                      <CLabel htmlFor="text-input">Middle Name</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Middle Name" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="4">
                      <CLabel htmlFor="text-input">Last Name</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Last Name" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="12" md="4">
                      <CLabel htmlFor="text-input">Address</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Street No, Barangay." />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">City</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="City" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">Province</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Province" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="2">
                      <CLabel htmlFor="text-input">ZIP Code</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="ZIP Code" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="12" md="4">
                      <CLabel htmlFor="text-input">Birthdate</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol md="2">
                      <CLabel>Gender</CLabel>
                      <CFormGroup variant="custom-radio" >
                        <CInputRadio custom id="inline-radio1" name="inline-radios" value="1" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio custom id="inline-radio2" name="inline-radios" value="2" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">Email</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Email" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">Contact No</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Contact No" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                  </CFormGroup>
                  <hr />
                  <CFormGroup row>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">Department</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Department" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">Position</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="Position" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">PhilHealth</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="PhilHealth" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    <CCol xs="12" md="3">
                      <CLabel htmlFor="text-input">SSS No</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="SSS No" />
                      <CFormText>This is a help text</CFormText>
                    </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="3">
                        <CLabel htmlFor="text-input">TAX No</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="TAX No" />
                        <CFormText>This is a help text</CFormText>
                      </CCol>
                      <CCol xs="12" md="3">
                        <CLabel htmlFor="text-input">PagIbig</CLabel>
                      <CInput id="text-input" name="text-input" placeholder="PagIbig" />
                        <CFormText>This is a help text</CFormText>
                      </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="12" md="6">
                      <CButton color="primary" block>Already have an account? Sign in</CButton>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CButton color="success" block>Create Account</CButton>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
