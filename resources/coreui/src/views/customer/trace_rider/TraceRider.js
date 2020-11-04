import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CContainer,
  CLabel,
  CButton,
  CImg
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
//import { DocsLink } from 'src/reusable'


const TraceRider = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center" >
            <div class="text-center">
              <CImg
                src={'logo/gh-logo.jpg'}
                class="rounded img-fluid-responsive"  
              />
            </div>
            <CCol md="7" lg="7" xl="8">
              <CCard accentColor="primary" className="card-accent-black">
            <CCardHeader>
              Check your Rider Deliver Location
            </CCardHeader>
            <CCardBody>
                  <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="hf-email">First Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="email" id="hf-email" name="hf-email" placeholder="Enter First Name" autoComplete="email" />
                        <CFormText className="help-block">Enter First Name</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="hf-password">Waybill No.</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="password" id="hf-password" name="hf-password" placeholder="Waybill No." autoComplete="current-password" />
                        <CFormText className="help-block">Enter Waybill No.</CFormText>
                      </CCol>
                    </CFormGroup>
                    <div className="text-center">
                      <CCol className="text-center">
                        <CButton className="mt-2 mb-3" variant="outline" color="dark">CHECK NOW</CButton>
                      </CCol>
                    </div>
                    
                  </CForm>
                  <hr/>
                  <CCol xs="12" sm="12" md="12">
                    <CCard color="" >
                      <CCardHeader>
                        Rider Information
                       </CCardHeader>
                      <CCardBody>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="hf-email">Location</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CLabel htmlFor="hf-email">Myapis Street, Makati City</CLabel>
                          </CCol>
                        </CFormGroup>
                      </CCardBody>
                    </CCard>
                  </CCol>
            </CCardBody>
              </CCard>
              </CCol>
      </CRow>
        </CContainer>
        </div>
    </>
  )
}

export default TraceRider
