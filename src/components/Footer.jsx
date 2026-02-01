function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Model Tree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
