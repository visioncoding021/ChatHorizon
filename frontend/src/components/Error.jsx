
const Error = ({typeErr,message}) => {
  return (
    <div>
        <p
        className='text-sm text-red-500 '
        >{`type : ${typeErr} and meassage : ${message}`}</p>
    </div>
  )
}

export default Error