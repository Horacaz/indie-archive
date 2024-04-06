import actualizaciones from '@/fixtures/actualizaciones.json'

export default function Updates() {
  return (
    <>
      {actualizaciones.map((i, index) => (
        <Item date={i.date} content={i.content} key={index} />
      ))}
    </>
  )
}

function Item(props: { date: string; content: string }) {
  return (
    <div className="font-bold my-1 py-1 text-white text-sm hover:text-yellow-400 hover:cursor-pointer">
      <p className="font-normal">{props.date}</p>
      <p>{props.content}</p>
    </div>
  )
}
