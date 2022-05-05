import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Field, Form, Formik, useField } from 'formik';


const initialValues = {
    offer: 0
};


const makeOffer = async offer => {

}




const Offer = ({ text, color }) => {

 function selectOnlyThis(id) {
        for (var i = 1;i <= 3; i++)
        {
            document.getElementById(i).checked = false;
        }
        document.getElementById(id).checked = true;
    }

/*    function selectOnlyThis(id){
        var myCheckbox = document.getElementsByName("offer");
        Array.prototype.forEach.call(myCheckbox, (el) => {
            el.checked = false;
        });
        id.checked = true;
      } */
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
                                <input type="checkbox" id="1"  name="offer"  onClick={() => selectOnlyThis(this.id)} />
                                <label for="twenty">%20'si kadar teklif ver</label>
                            </div>

                            <div>
                                <input type="checkbox" id="2"  name="offer" onClick={() => selectOnlyThis(this.id)}/>
                                <label for="thirty">%30'u kadar teklif ver</label>
                            </div>

                            <div>
                                <input type="checkbox" id="3"  name="offer" onClick={() => selectOnlyThis(this.id)}/>
                                <label for="forty">%40'ı kadar teklif ver</label>
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
