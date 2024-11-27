export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className="flex flex-col justify-center py-0 px-1 my-0 mx-auto max-w-[800px]">
      {children}
    </div>
  )
}