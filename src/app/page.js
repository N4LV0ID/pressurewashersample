export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <nav className="bg-blue-700 text-white p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Pressure Washing Pros</h2>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
            <li>
              <a href="#quote" className="hover:underline">Get a Quote</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to Pressure Washing Pros
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We make your home and business shine!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}