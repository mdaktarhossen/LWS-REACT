export default function HoverCounter({count, handelIncrement}) {
    return (
      <div>
        <h1 onMouseOver={handelIncrement}>Hovet {count} time</h1>
      </div>
    )
}
