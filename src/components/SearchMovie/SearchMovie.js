import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { SearchForm, ErrMessage } from './SearchMovie.styled';


const SignupSchema = Yup.object().shape({
  search: Yup.string().required('This field is empty. Write something'),
});

export const SearchMovie = ({ onSubmit, handleChange }) => {
  return (
    <SearchForm>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          onSubmit(values);
        }}
        onChange={values => {
          handleChange(values);
        }}
      >
        <Form>
          <div className="search-item">
            <label htmlFor="search" className="visually-hidden"></label>
            <Field
              id="search"
              name="search"
              autoComplete="off"
              className="input"
              type="text"
              placeholder="Search movie"
        
            />
            <ErrMessage name="search" component="div" />
            <button type="submit" className="button">
              Search
            </button>
          </div>
        </Form>
      </Formik>
    </SearchForm>
  );
};

