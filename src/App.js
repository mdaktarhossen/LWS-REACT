function Item({ name, isPacked }) {
  return (
    <div>
      {isPacked?<li>{name}✔</li>: <li>{<del><li>{name}</li></del>}</li>}
    </div>
  )
}

export default function PackingList() {
  return (
    <div>
      <section>
        <h1>Li list</h1>
        <Item name="1st" isPacked={true}/>
        <Item name="2nd" isPacked={false}/>
        <Item name="3st" isPacked={true}/>
        <Item name="3st" isPacked={true}/>
        <Item name="3st" isPacked={false}/>
      </section>
    </div>
    );
}
