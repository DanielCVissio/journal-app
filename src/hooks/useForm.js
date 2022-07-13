import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    //cada vez que la funcion cambia el state, se volvera a llamar la funcion
    useEffect(() => {
      createValidators();
    }, [formState])
    
    const isFormValid= useMemo(()=>{

        for(const formValue of Object.keys(formValidation)){
            if( formValidation[formValue] !== null) return false;//return es para salir de la funcion, es el valor de retorno de la funcion
        }
        return true;
    },[formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators=()=>{

        const formCheckedValues={};
        
        for(const formField of Object.keys(formValidations)){
            const[fn, errorMessage] = formValidations [formField];

            formCheckedValues[`${ formField }Valid`]=fn(formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
    }
}