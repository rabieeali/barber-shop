import { useFormik } from "formik"
import * as Yup from "yup";
import { Container, Col, Row } from "react-bootstrap"




interface IinitialValues {
    issue: String,
    income: String
}


const initialValues: IinitialValues = {
    issue: "",
    income: ""
};

const onSubmit = (values: IinitialValues) => {

    console.log(values);

};


const validationSchema = Yup.object({
    issue: Yup.string()
        .min(3, "حداقل 3 کارکتر")
        .required("لطفا فیلد را پر کنید"),
    email: Yup.string()
        .email("حداقل مبلع 1000 تومان")
        .required("لطفا فیلد را پر کنید"),

});

const index = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true,
    });




    return (
        <Col md={4} className="mx-auto">

            <form className="bg-secondary rounded-3 p-2" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="my-1" htmlFor="desc">برای</label>
                    <input className="form-control" id="desc" placeholder="دریافت مبلغ برای ..." />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="price">مبلع دریافتی</label>
                    <input className="form-control" id="price" placeholder="مبلغ" />
                </div>

                <button type="submit" className="btn btn-primary mt-4 d-block me-auto">تایید</button>
            </form>
        </Col>
    )
}

export default index