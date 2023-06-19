import { Field, Form, Formik } from 'formik'
import './App.css'

function App() {
  return (
    <>
      <Formik
        initialValues={{
          step: 2,

          name: "",
          surname: "",

          age: "",
          job: "",

          about: ""
        }}
        onSubmit={(values, actions) => {
          console.log("values", values)
        }}>
        {({ values }) => (
          <Form className='mx-auto w-[400px]'>

            <header className='mb-4'>
              <h3 className='text-lg font-medium text-gray-800'>Step: {values.step}</h3>
            </header>

            {values.step === 1 && (
              <div className='grid grid-cols-2 gap-4'>
                <Field name="name" className="input" placeholder="Name"></Field>
                <Field name="surname" className="input" placeholder="Surname"></Field>
              </div>
            )}
            {values.step === 2 && (
              <div className='grid grid-cols-2 gap-4'>
                <Field name="age" className="input" placeholder="Age"></Field>
                <Field name="job" className="input" placeholder="Job"></Field>
              </div>
            )}
            {values.step === 3 && (
              <div className='grid grid-cols-2 gap-4'>
                <Field name="age" className="textarea" placeholder="About" component="textarea"></Field>
              </div>
            )}

            <div className='grid grid-cols-2 gap-4 mt-2'>
              {values.step > 1 && (<button className='button'>Prev</button>) || <div />}
              <button className='button'>Next</button>
            </div>
          </Form>)}
      </Formik>
    </>
  )
}

export default App
