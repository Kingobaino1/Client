const categoryLogic = (attribute, arr, state) => {
    arr.map((att) => {
    if(attribute.name === 'Color') {
      return <div className='color-di' key={att.value}><button style={{backgroundColor: att.value}} className='color' onClick={() => {
        state({[attribute.name]: att.value});
      }}></button></div>
    }
    return <div key={att.value}><button onClick={() => {
      state({[attribute.name]: att.value});
    }}>{att.value}</button></div>
  })
}

export default categoryLogic;