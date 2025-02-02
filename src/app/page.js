export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Pressure Washing Pros</h1>
      <p className="mt-4 text-lg text-gray-600">We make your home and business shine!</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
        Get a Free Quote
      </button>
    </div>
  );
}
