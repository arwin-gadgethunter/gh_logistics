import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CImg,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// //import { DocsLink } from 'src/reusable'

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
   
      <CRow>
      <CCol xs="12" sm="6">
  <CCard>
    <CCardHeader>
      Scan Order
            </CCardHeader>
    <CCardBody>
      <CForm className="text-center">
             
                  <CImg
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  block
                  width="300"
                  class="mb-4"
                  className="text-center"
                  />
            
      </CForm>
    </CCardBody>
  </CCard>
</CCol>

        </CRow>
    
    </>
  )
}

export default BasicForms
