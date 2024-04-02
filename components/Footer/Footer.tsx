export default function Footer() {
  return (
    <footer className="text-white shadow m-4 border-t border-neutral-900 w-6/12 m-auto mt-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="/" className="hover:underline">
            The Indie Archive
          </a>
          . Todos los derechos reservados.
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Desarrollado por Horacio Cazavant
        </span>
      </div>
    </footer>
  )
}
