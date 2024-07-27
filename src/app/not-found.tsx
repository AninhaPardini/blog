export default function notFound () {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <main className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-8xl font-bold text-mandy-600">404</h1>
          <p className="text-2xl font-medium text-white-950">Página não encontrada</p>
        </main>
      </div>
    </div>
  );
}