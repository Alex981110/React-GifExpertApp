import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

   const [inputValue, setInputValue] = useState('');
   
   const handleInput = (event) => {
      setInputValue(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();

      if(inputValue.trim().length > 2){
         setCategorias(categorias => [inputValue, ...categorias ]);
         setInputValue('');
      }
   }

   // const handleDelete = () => {
   //    // setInputValue(categorias.pop());
   //    console.log('Puchado');
   // }

   return (
      <form onSubmit={handleSubmit}>
         {/* <button onClick={handleDelete}> Borrar</button> */}
         <input 
            type="text"
            value={inputValue}
            onChange={handleInput}
         />
     </form>
   )
}

AddCategory.propTypes = {
   setCategorias: PropTypes.func.isRequired
}
