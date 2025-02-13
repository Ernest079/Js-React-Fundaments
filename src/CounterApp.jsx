
export const CounterApp = ({value}) => {
  if(!value){
    value = 0;
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  );
}
