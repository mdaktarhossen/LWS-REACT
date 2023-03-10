
export default function Text({addEmoji}) {
  const text="lovce is progrmamming"
  return <div>{addEmoji? addEmoji(text, "emoji"): text}</div>
  
}
