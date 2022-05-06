import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Field, Form, Formik, useField } from 'formik';
import { CFormCheck } from '@coreui/react';


const initialValues = {
    offer: 0
};


const makeOffer = async offer => {

}


const Offer = ({ text, color }) => {


    return (
        <>
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
                <Formik
                    initialValues={initialValues}
                    //    validationSchema={}

                    onSubmit={(values, formikHelpers) => {
                        console.log(values);
                        makeOffer(values);
                        formikHelpers.resetForm();
                    }}
                >

                    {({ errors, isValid, touched, dirty }) => (
                        <Form>

                            <div>
                            {/* <CFormCheck type="checkbox" name="flexRadioDefault" id="flexRadio1" label="%20'si kadar teklif ver" />  */}
                            <input class="btn-check" id="option1" type="radio" name="options" autocomplete="off" />
                            <label class="btn btn-secondary" for="option1">Radio</label> 
                            </div>

                            <div>
                            {/* <CFormCheck type="checkbox" name="flexRadioDefault" id="flexRadio2" label="%30'u kadar teklif ver"/> */}
                            <input class="btn-check" id="option2" type="radio" name="options" autocomplete="off" />
                            <label class="btn btn-secondary" for="option2">Radio</label>        
                            </div>

                            <div>
                            {/* <CFormCheck type="checkbox" name="flexRadioDefault" id="flexRadio3" label="%40'ı kadar teklif ver"/> */}
                            <input class="btn-check" id="option3" type="radio" name="options" autocomplete="off" />
                            <label class="btn btn-secondary" for="option3">Radio</label> 
                            </div>
                            <input type="text" placeholder='Teklif Belirle'/>
                        </Form>
                    )}
                </Formik>
            </Popup>
        </>
    );
}

export default Offer;
