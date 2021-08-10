
export default function Form({onSubmit}) {
  return (
    <form onSubmit={onSubmit} data-testid="form">
      <button type="submit">Submit</button>
    </form>
  );
}