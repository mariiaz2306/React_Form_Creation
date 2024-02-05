import React, { useEffect,useState } from 'react'
import { useForm, Controller} from 'react-hook-form'
import styles from "../Form/FormComponent.css"

const FormComponent = () => {
  const { control, reset, handleSubmit, register, formState: { errors } } = useForm();
  const [countries, setCountries] = useState([])
  const[isMyFormSubmitted, setIsMyFormSubmitted]=useState(false)


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
      .then(data => setCountries(data))
  }, [])


  const handleUserSubmit = (data) => {
    console.log(data);
    setIsMyFormSubmitted(true)
    reset()
  };

    return (
  <>
        {isMyFormSubmitted && (
  <div style={{color: "red", fontSize: 20, marginTop: 30}}>Your form has been submitted successfully!</div>
        )}
    <h1>Billing Details</h1>
  <form onSubmit={handleSubmit(handleUserSubmit)}>
      {/* <div className="form-name"> */}
      
  <div className='group_norm'>
            <div className='first_name'>
              <label
                 htmlFor='firstName'
              >First Name*</label>
  <input
                {...register('firstName', {
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Must contain only latin letters"
                  },
                  required: 'First Name is required',
                  minLength: { value: 2, message: 'Minimum length is 2 characters' },
                  maxLength: { value: 15, message: 'Maximum length is 15 characters' }
                })}
          />
          {errors?.firstName?.message && <p className="error">{errors.firstName.message}</p>}
  </div>
     
  <div className='last_name'>
              <label
                 htmlFor='lastName'
              >Last Name*</label>
  <input 
                {...register('lastName', {               
                    pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Must contain only latin letters"
                  },
              required: 'Last Name is required', 
              minLength: { value: 2, message: 'Minimum length is 2 characters' },
              maxLength: { value: 15, message: 'Maximum length is 15 characters' }
            })}
          />
          {errors?.lastName?.message && <p className="error">{errors.lastName.message}</p>}
    </div> 
</div>

         
  <label
                htmlFor='companyName'
              >Company Name(Optional)</label>
  <input
                {...register('companyName', {
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Must contain only latin letters"
                  }
                  })}
          />
          {errors?.companyName?.message && <p className="error">{errors.companyName.message}</p>}
        
            
{/* //country */}
                  
 <label
        htmlFor='countries'
              >Country*</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <select {...field} >
                {countries.map((country) => (
                  <option key={country.cca2} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            )}
            rules={{ required: 'Country is required' }}
          />
          {errors.country && <p className="error">{errors.country.message}</p>}
          
            
            {/* streeet */}
          
  <label
                htmlFor='street'
              >Street address*</label>
  <input
              type="text"
                {...register('streetAddress', {
                  pattern: {
                    value: /^[A-Za-zÄäÖöÜüß]+$/u,
                    message: "Must contain only latin letters"
                  }
                  })}
          />
    {errors?.streetAddress?.message && <p className="error">{errors.streetAddress.message}</p>}
         
            

            {/* town/city */}
             
  <label
            htmlFor='townCity'
              >Town / City</label>
  <input
              type="text"
                {...register('townCity', {
                  pattern: {
                    value:/^[A-Za-z]+$/,
                    message: "Must contain only latin letters"
                  }
                  })}
          />
          {errors?.townCity?.message && <p className="error">{errors.townCity.message}</p>}
          

            {/* zip code */}
          
  <label
                htmlFor='zipCode'>ZIP code*</label>
  <input
              type='number'
                {...register('zipCode', {
                  pattern: {
                    value:  /^\d{5}$/,
                    message:"Must be a valid US Zip Code."
            },
                   required: 'ZIP code is required', 
                  })}
          />
          {errors?.zipCode?.message && <p className="error">{errors.zipCode.message}</p>}
          
            
            {/* //phone number */}
  <label htmlFor="german_phone"> 
            Telephone*
             </label>
  <input 
                    type="tel"            
                    {...register("german_phone",
                      {
                          required: "Phone is required",
                            pattern: {
                                value:  /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                                message: "You should put a number with german country code"
                            },
                        })} />
           {errors?.german_phone?.message && <p className="error">{errors.german_phone?.message}</p>}

       {/* email */}
  <label htmlFor="email">
            Email*
            </label>
  <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Not a valid pattern for email'
            },
          })}
        />
      
     {errors?.email?.message && <p className="error">{errors.email?.message}</p>}

<input
            type="add_info"
            id="additional_information"
          placeholder='Additional information'
          {...register('add_info', {
            required: false,
            
          })}
          />
          
  <button type="submit">Submit</button>
            </form>
             </>
  );
}

export default FormComponent;


