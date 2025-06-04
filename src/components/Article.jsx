export default function Article({ title, content }) {
  return (
    <div>
      <div className="flex flex-col gap-2 text-zinc-100 p-4 selection:bg-zinc-200 selection:text-zinc-800">
        <h3 className="text-2xl self-center">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
