const ErrorAlert = ({message}) => {
  return (
    <section className="splash">
        <div className="text">
            <div className='alert' role="alert">
                {message}
            </div>
        </div>
    </section>
  )
}
export default ErrorAlert