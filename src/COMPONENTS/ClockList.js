import Clock from './Clock';

function ClockList({quentitys=[]}) {
  return (
    <div>
      {quentitys.map((key)=><Clock key={key}/>)}
    </div>
  )
}

export default ClockList;