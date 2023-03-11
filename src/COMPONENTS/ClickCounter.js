export default function ClickCounter({count, handelIncrement}) {
    return (
      <div>
        <button type='button' value={count} onClick={handelIncrement}>
          CLICKED {count} TIME
        </button>
      </div>
    )
  };
